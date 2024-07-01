import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma.config";
import { middleware } from "../../../../middleware";

type Book = {
  categoryId: number;
  authorId: number;
  title: string;
  cover: string;
  publicationYear: number;
  numberOfPage: number;
  code: string;
  edition: string;
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
    const books = await prisma.book.findMany({
      include: { category: true, author: true, loan: true },
    });
    return NextResponse.json({
      message: "Here is books list",
      data: books,
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
    const {
      categoryId,
      authorId,
      title,
      cover,
      publicationYear,
      numberOfPage,
      code,
      edition,
    }: Book = await req.json();

    if (
      !categoryId ||
      !authorId ||
      !title ||
      !cover ||
      !publicationYear ||
      !numberOfPage ||
      !code ||
      !edition
    )
      throw new Error("Invalid data");

    const verifyCategory = await prisma.category.findFirst({
      where: { id: categoryId },
    });

    if (!verifyCategory) throw new Error("Category not found");

    const verifyAuthor = await prisma.author.findFirst({
      where: { id: authorId },
    });

    if (!verifyAuthor) throw new Error("Author not found");

    const verifyCode = await prisma.book.findFirst({
      where: { code },
    });

    if (verifyCode) throw new Error(`${code} already exists`);

    const book = await prisma.book.create({
      data: {
        categoryId,
        authorId,
        title,
        cover,
        publicationYear,
        numberOfPage,
        code,
        edition,
      },
    });
    return NextResponse.json({
      message: "Book created successfully",
      data: book,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
