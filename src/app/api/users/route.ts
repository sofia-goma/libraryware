import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma.config";
import { middleware } from "../../../../middleware";

export async function GET(req: NextRequest) {
  try {
    const response = await middleware(req);
    if (response) {
      return response;
    }

    const role = (req as any).locals.role;

    if (role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }
    const users = await prisma.user.findMany({
      include: { category: true, loan: true },
    });
    return NextResponse.json({
      message: "Here is users list",
      data: users,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
