import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.config";

export async function GET(req: Request) {
  try {
    const categories = await prisma.category.findMany({
      where: { parentId: null },
      include: { children: true, user: true },
    });
    return NextResponse.json({
      message: "Here is the categories of our library",
      data: categories,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    if (!name) throw new Error("Invalid data");

    const category = await prisma.category.create({
      data: {
        name,
        description: null,
        parentId: null,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return NextResponse.json({
      message: "create category successfully",
      data: category,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
