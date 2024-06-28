import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.config";

export async function GET(req: Request) {
  try {
    const subcategories = await prisma.category.findMany({
      where: { parentId: { not: null }, children: { none: {} } },
      include: { book: true },
    });
    return NextResponse.json({
      message: "Here is the categories of our library",
      data: subcategories,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}

export async function POST(req: Request) {
  try {
    const { name, description, parent } = await req.json();

    if (!name || !parent) throw new Error("Invalid data");

    const parentVerify = await prisma.category.findFirst({
      where: { name: parent },
    });
    if (!parentVerify) throw new Error("Parent is not exist in category");

    const subcategory = await prisma.category.create({
      data: {
        name,
        description,
        parentId: parentVerify.id,
      },
      include: { parent: true, book: true },
    });
    return NextResponse.json({
      message: "create subcategory successfully",
      data: subcategory,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
