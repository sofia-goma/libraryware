import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.config";

export async function GET(req: Request) {
  try {
    const loans = await prisma.loan.findMany();
    return NextResponse.json({
      message: "Voici la liste de livres pretés",
      data: loans,
    });
  } catch (error: any) {
    NextResponse.json({ error: error.message });
  }
}

const url = process.env.DATABASE_URL;

console.log(url);
