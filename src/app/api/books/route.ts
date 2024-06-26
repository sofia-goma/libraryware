import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.config";

export async function GET(req: Request) {
  try {
    const books = await prisma.book.findMany();
    return NextResponse.json({
      message: "Voici les livres de notre bibliotheque",
      data: books,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
