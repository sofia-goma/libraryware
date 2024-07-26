import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma.config";
import { middleware } from "../../../../middleware";

type Author = {
  name: string;
  firstname?: string;
  photo?: string;
  description: string;
};

export async function GET(req: NextRequest) {
  try {
    const response = await middleware(req);
    if (response) {
      return response;
    }

    const role = (req as any).locals.role;

    if (role !== "admin" && role !== "user") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }
    const author = await prisma.author.findMany({
      include: { books: true },
    });
    return NextResponse.json({
      message: "Here is author list",
      data: author,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
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
    const { name, firstname, photo, description }: Author = await req.json();

    if (!name) throw new Error("Invalid data");

    const verifyName = await prisma.author.findFirst({ where: { name } });

    if (verifyName) throw new Error("Author already exist");

    const author = await prisma.author.create({
      data: {
        name,
        firstname,
        photo,
        description,
      },
    });
    return NextResponse.json({
      message: "Author created successfully",
      data: author,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
