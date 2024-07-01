// middleware.ts

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(request: NextRequest) {
  const authorizationHeader = request.headers.get("authorization");
  const token = authorizationHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ message: "No token provided" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET as string) as {
      userId: number;
      role: string;
    };
    (request as any).locals = { userId: decoded.userId, role: decoded.role }; // Utilisation de request.locals pour stocker les données utilisateur
  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
