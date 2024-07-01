import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma.config";
import { middleware } from "../../../../../middleware";

type Author = {
  name?: string;
  firstName?: string;
  photo?: string;
  description?: string;
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

    if (role !== "admin" && role !== "user") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const id = Number(params.id);

    const author = await prisma.author.findFirst({
      where: { id },
      include: { books: true },
    });

    if (!author) throw new Error("Author not found");

    return NextResponse.json({
      message: `Author ${id}`,
      data: author,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: RouteParams) {
  try {
    const id = Number(params.id);
    const response = await middleware(req);
    if (response) {
      return response;
    }

    const role = (req as any).locals.role;
    const userId = (req as any).locals.userId;

    console.log(role, userId);

    if (role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const body: Author = await req.json();

    const { name }: Author = body;

    const verifyId = await prisma.author.findFirst({
      where: { id },
    });

    if (!verifyId) throw new Error(`Author ${id} not found`);

    const authorArray = Object.keys(verifyId);
    const bodyArray = Object.keys(body);

    if (!bodyArray.every((e) => authorArray.includes(e)))
      throw new Error("Some properties are not");

    const verifyName = await prisma.author.findFirst({ where: { name } });
    if (verifyName) throw new Error(`Author ${name} already exist`);

    const author = await prisma.author.update({
      where: { id },
      data: {
        ...body,
      },
    });
    return NextResponse.json({
      message: "Author update successfully",
      data: author,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
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

    const id = Number(params.id);

    const verifyId = await prisma.author.findFirst({
      where: { id },
    });

    if (!verifyId) throw new Error(`Author ${id} not found`);

    const author = await prisma.author.delete({
      where: { id },
    });
    return NextResponse.json({
      message: "Author delete successfully",
      data: author,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
