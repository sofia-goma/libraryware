import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const data = NextResponse.json({
    message: "Bienvenue sur notre API REST de l'Application LibraryWare",
    documentation: "",
  });
  return data;
}
