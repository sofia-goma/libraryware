import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.config";

type RouteParams = {
  params: {
    id: string;
  };
};
export async function GET(req: Request, { params }: RouteParams) {
  try {
    const id = params.id;
    const subcategories = await prisma.category.findMany({
      where: { parentId: Number(id) },
      include: { book: true },
    });
    if (subcategories.length == 0) throw new Error("No category");
    return NextResponse.json({
      message: "Here is the categories of our library",
      data: subcategories,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
