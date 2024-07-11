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
    console.log(id);
    const subcategories = await prisma.category.findUnique({
      where: {
        id: Number(id),
        parentId: { not: null },
        children: { none: {} },
      },
      include: { book: true },
    });
    if (!subcategories) throw new Error("No Subcategory");
    return NextResponse.json({
      message: "Here is the subcategorie",
      data: subcategories,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
