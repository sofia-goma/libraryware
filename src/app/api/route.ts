import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const data = NextResponse.json({ message: "hello world" });
  return data;
}
