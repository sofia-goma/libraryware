import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.config";

type RouteParams = {
  params: { subcategory: string };
};

export async function GET(req: Request, { params }: RouteParams) {
  try {
    const id = Number(params.subcategory);

    const subCategory = await prisma.subCategory.findFirst({
      where: { categoryId: id },
    });
    if (!subCategory) throw new Error(`Pas de catégorie ${id}`);
    return NextResponse.json({
      message: `Voici les sous categories de ${id}  de notre bibliotheque`,
      data: subCategory,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
