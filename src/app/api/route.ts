import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    return NextResponse.json({
      message: "Bienvenue sur notre API REST de l'Application LibraryWare",
      documentation: "",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
