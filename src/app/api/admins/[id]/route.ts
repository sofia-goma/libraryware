import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma.config";
import bcrypt from "bcrypt";
import { middleware } from "../../../../../middleware";

type Admin = {
  name?: string;
  firstName?: string;
  password?: string;
  phone?: string;
  title?: string;
  photo?: string;
};

type RouteParams = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const response = await middleware(req);
    if (response) {
      return response;
    }

    const role = (req as any).locals.role;

    if (role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const email = params.id;

    const admin = await prisma.admin.findFirst({
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

    if (!admin) throw new Error("Admin not found");

    return NextResponse.json({
      message: `Admin ${email}`,
      data: admin,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}

export async function PUT(req: NextRequest, { params }: RouteParams) {
  try {
    const email = params.id;
    const response = await middleware(req);
    if (response) {
      return response;
    }

    const role = (req as any).locals.role;
    const userId = (req as any).locals.userId;

    console.log(role, userId);

    if (role !== "admin" || userId !== email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const body: Admin = await req.json();

    const { password } = body;

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

    if (!adminVerifyMail) throw new Error(`Admin ${email} not found`);

    const adminArray = Object.keys(adminVerifyMail);
    const bodyArray = Object.keys(body);

    if (!bodyArray.every((e) => adminArray.includes(e)))
      throw new Error("Some properties are not");

    if (password) body.password = await bcrypt.hash(password, 10);

    const admin = await prisma.admin.update({
      where: { email },
      data: {
        ...body,
      },
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
      message: "Admin update successfully",
      data: admin,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}

export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const response = await middleware(req);
    if (response) {
      return response;
    }

    const role = (req as any).locals.role;

    if (role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const email = params.id;

    const adminVerifyMail = await prisma.admin.findFirst({
      where: { email },
    });

    if (!adminVerifyMail) throw new Error(`Admin ${email} already exist`);

    const admin = await prisma.admin.delete({
      where: { email },
    });
    return NextResponse.json({
      message: "Admin delete successfully",
      data: admin,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
