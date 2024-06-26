import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.config";

export async function GET(req: Request) {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({
      message: "Voici les utilisateur du bibliotheque",
      data: users,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
