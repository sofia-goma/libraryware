import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma.config";
import { middleware } from "../../../../middleware";
import { Children } from "react";

export async function GET(req: NextRequest) {
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
    const { name } = await req.json();

    if (!name) throw new Error("Invalid data");

    const verifyName = await prisma.category.findFirst({ where: { name } });
    if (verifyName) throw new Error("Category already exists");

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
