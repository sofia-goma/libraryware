import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.config";
import bcrypt from "bcrypt";

export async function GET(req: Request) {
  try {
    const admin = await prisma.admin.findMany();
    return NextResponse.json({
      message: "Here is admins list",
      data: admin,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}

type Body = {
  email: string;
  name: string;
  firstName: string;
  password: string;
  phone: string;
  title: string;
};

export async function POST(req: Request) {
  try {
    const { email, name, firstName, password, phone, title }: Body =
      await req.json();

    if (!email || !name || !firstName || !password || !phone || !title)
      throw new Error("Invalid data");

    const userVerifyMail = await prisma.user.findFirst({ where: { email } });
    const adminVerifyMail = await prisma.admin.findFirst({
      where: { email },
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
