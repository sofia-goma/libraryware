import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.config";

export async function GET(req: Request) {
  try {
    const category = await prisma.category.findMany();
    return NextResponse.json({
      message: "Voici les categories des livres du bibliotheque",
      data: category,
    });
  } catch (error: any) {
    NextResponse.json({ error: error.message });
  }
}
