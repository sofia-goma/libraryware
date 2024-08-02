import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma.config";
import { middleware } from "../../../../../middleware";
import axios from "axios";

type Book = {
  categoryId: number;
  author: number;
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

    if (role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }
    const { searchParams } = new URL(req.url);
    const isbn = searchParams.get("isbn");

    if (!isbn) {
      return NextResponse.json(
        { message: "ISBN is required" },
        { status: 400 }
      );
    }

    const books = await axios.get(
      `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=details`
    );
    if (!books) {
      return NextResponse.json(
        { message: "Pas de livre correspondant à cet ISN" },
        { status: 400 }
      );
    }
    return NextResponse.json({
      message: "Here is books list",
      data: books.data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
