import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma.config";
import bcrypt from "bcrypt";
import { middleware } from "../../../../../middleware";

type User = {
  name?: string;
  firstname?: string;
  photo?: string;
  email?: string;
  password?: string;
  number?: string;
  address?: string;
  subscriptionDate?: string;
  subscriptionEndDate?: string;
};

type RouteParams = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const id = params.id;
    const response = await middleware(req);
    if (response) {
      return response;
    }

    const role = (req as any).locals.role;
    const userId = (req as any).locals.userId;

    if (role !== "admin" && userId !== id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const user = await prisma.user.findFirst({
      where: { userId: id },
      include: { category: true, loan: true },
    });

    if (!user) throw new Error("User not found");

    return NextResponse.json({
      message: `User ${id}`,
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: RouteParams) {
  try {
    const id = params.id;
    const response = await middleware(req);
    if (response) {
      return response;
    }

    const userId = (req as any).locals.userId;

    if (userId !== id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const body = await req.json();

    const { email, password, number }: User = body;

    const verifyUser = await prisma.user.findFirst({
      where: { userId: id },
    });

    if (!verifyUser) throw new Error(`User ${id} not found`);

    const bookArray = Object.keys(verifyUser);
    const bodyArray = Object.keys(body);

    if (!bodyArray.every((e) => bookArray.includes(e)))
      throw new Error("Some properties are not");

    if (email) {
      const verify = await prisma.user.findFirst({
        where: { email },
      });
      if (verify) throw new Error(`${email}  already exist`);
    }

    if (password) {
      body.password = await bcrypt.hash(password, 10);
    }

    if (number) {
      const verify = await prisma.user.findFirst({
        where: { number },
      });
      if (verify) throw new Error(`${number}  already exist`);
    }

    const user = await prisma.user.update({
      where: { userId: id },
      data: {
        ...body,
      },
      include: { category: true, loan: true },
    });
    return NextResponse.json({
      message: "Category update successfully",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const id = params.id;
    const response = await middleware(req);
    if (response) {
      return response;
    }

    const role = (req as any).locals.role;
    const userId = (req as any).locals.userId;

    if (role !== "admin" && userId !== id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const verifyId = await prisma.user.findFirst({
      where: { userId: id },
    });

    if (!verifyId) throw new Error(`${id} user not found`);

    const user = await prisma.user.delete({
      where: { userId: id },
    });
    return NextResponse.json({
      message: "Category deleted successfully",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
