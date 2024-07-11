import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma.config";
import { middleware } from "../../../../../middleware";

type Category = {
  name: string;
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

    const category = await prisma.category.findFirst({
      where: { id, description: null, parent: null },
      include: { user: true, children: true },
    });

    if (!category) throw new Error("Category not found");

    return NextResponse.json({
      message: `Category ${id}`,
      data: category,
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

    if (role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const body = await req.json();

    const { name }: Category = body;

    const verifyCategory = await prisma.category.findFirst({
      where: { id },
    });

    if (!verifyCategory) throw new Error(`Category ${id} not found`);

    const bookArray = Object.keys(verifyCategory);
    const bodyArray = Object.keys(body);

    if (!bodyArray.every((e) => bookArray.includes(e)))
      throw new Error("Some properties are not");

    const verifyName = await prisma.category.findFirst({
      where: { name },
    });
    if (verifyName) throw new Error(`${name} category  already exist`);

    const category = await prisma.category.update({
      where: { id },
      data: {
        ...body,
      },
      include: { children: true, user: true },
    });
    return NextResponse.json({
      message: "Category update successfully",
      data: category,
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

    const verifyId = await prisma.category.findFirst({
      where: { id },
    });

    if (!verifyId) throw new Error(`${id} category not found`);

    await prisma.category.update({
      where: { id },
      data: { user: { set: [] } },
    });

    await prisma.category.deleteMany({
      where: { parentId: id },
    });

    const category = await prisma.category.delete({
      where: { id },
    });
    return NextResponse.json({
      message: "Category deleted successfully",
      data: category,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
