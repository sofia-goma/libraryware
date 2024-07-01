import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma.config";
import { middleware } from "../../../../../middleware";

type Book = {
  categoryId?: number;
  authorId?: number;
  title?: string;
  cover?: string;
  publicationYear?: number;
  numberOfPage?: number;
  code?: string;
  edition?: string;
  statut?: string;
};

type RouteParams = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const response = await middleware(req);
    if (response) {
      return response;
    }

    const role = (req as any).locals.role;

    if (role !== "admin" && role !== "user") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const id = Number(params.id);

    const book = await prisma.book.findFirst({
      where: { id },
      include: { category: true, author: true, loan: true },
    });

    if (!book) throw new Error("Book not found");

    return NextResponse.json({
      message: `Book ${id}`,
      data: book,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: RouteParams) {
  try {
    const id = Number(params.id);
    const response = await middleware(req);
    if (response) {
      return response;
    }

    const role = (req as any).locals.role;

    if (role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const body = await req.json();

    const { categoryId, authorId, code, statut }: Book = body;

    const verifyBook = await prisma.book.findFirst({
      where: { id },
    });

    if (!verifyBook) throw new Error(`Book ${id} not found`);

    const bookArray = Object.keys(verifyBook);
    const bodyArray = Object.keys(body);

    if (!bodyArray.every((e) => bookArray.includes(e)))
      throw new Error("Some properties are not");

    if (categoryId) {
      const verifyCategory = await prisma.category.findFirst({
        where: { id: categoryId },
      });
      if (!verifyCategory) throw new Error(`${categoryId} category  not exist`);
    }

    if (authorId) {
      const verifyAuthor = await prisma.author.findFirst({
        where: { id: authorId },
      });
      if (!verifyAuthor) throw new Error(`${authorId} author  not exist`);
    }

    if (code) {
      const verifyCode = await prisma.book.findFirst({
        where: { code },
      });
      if (verifyCode) throw new Error(`${code} book  already exist`);
    }

    if (
      statut &&
      statut !== "available" &&
      statut !== "reserve" &&
      statut !== "borrowed"
    )
      throw new Error(`Statut not available`);

    const book = await prisma.book.update({
      where: { id },
      data: {
        ...body,
      },
      include: { category: true, author: true, loan: true },
    });
    return NextResponse.json({
      message: "Book update successfully",
      data: book,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const response = await middleware(req);
    if (response) {
      return response;
    }

    const role = (req as any).locals.role;

    if (role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const id = Number(params.id);

    const verifyId = await prisma.book.findFirst({
      where: { id },
    });

    if (!verifyId) throw new Error(`${id} book not found`);

    const book = await prisma.book.delete({
      where: { id },
    });
    return NextResponse.json({
      message: "Book deleted successfully",
      data: book,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
