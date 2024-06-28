import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.config";

export async function GET(req: Request) {
  try {
    const authors = await prisma.author.findMany({ include: { books: true } });
    return NextResponse.json({
      message: "Voici la liste des auteurs disponibles",
      data: authors,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
