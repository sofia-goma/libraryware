import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma.config";
import bcrypt from "bcrypt";
import { middleware } from "../../../../middleware";

type Admin = {
  email: string;
  name: string;
  firstName: string;
  password: string;
  phone: string;
  title: string;
};

export async function GET(req: NextRequest) {
  try {
    const response = await middleware(req);
    if (response) {
      return response;
    }

    const role = (req as any).locals.role;

    if (role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }
    const admin = await prisma.admin.findMany({
      select: {
        email: true,
        name: true,
        firstName: true,
        phone: true,
        photo: true,
        title: true,
      },
    });
    return NextResponse.json({
      message: "Here is admins list",
      data: admin,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const response = await middleware(req);
    if (response) {
      return response;
    }

    const role = (req as any).locals.role;

    if (role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }
    const { email, name, firstName, password, phone, title }: Admin =
      await req.json();

    if (!email || !name || !firstName || !password || !phone || !title)
      throw new Error("Invalid data");

    const userVerifyMail = await prisma.user.findFirst({ where: { email } });
    const adminVerifyMail = await prisma.admin.findFirst({
      where: { email },
      select: {
        email: true,
        name: true,
        firstName: true,
        phone: true,
        photo: true,
        title: true,
      },
    });

    if (userVerifyMail || adminVerifyMail)
      throw new Error("Email already exist");

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.admin.create({
      data: {
        email,
        name,
        firstName,
        password: hashedPassword,
        phone,
        title,
      },
    });
    return NextResponse.json({
      message: "Admin created successfully",
      data: admin,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
