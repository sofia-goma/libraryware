import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type Body = {
  email: string;
  password: string;
  remember?: boolean;
};

export async function POST(req: Request) {
  try {
    const { email, password }: Body = await req.json();
    if (!email || !password)
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );

    const user = await prisma.user.findFirst({ where: { email } });

    const admin = await prisma.admin.findFirst({ where: { email } });

    if (
      (!user || !(await bcrypt.compare(password, user.password))) &&
      (!admin || !(await bcrypt.compare(password, admin.password)))
    )
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );

    const tokenSecret = process.env.TOKEN_SECRET;

    let token;

    if (user) {
      token = jwt.sign(
        { userId: user.userId, role: "user" },
        tokenSecret as string,
        {
          expiresIn: "24h",
        }
      );
    }
    if (admin) {
      token = jwt.sign(
        { email: admin.email, role: "admin" },
        tokenSecret as string,
        {
          expiresIn: "24h",
        }
      );
    }

    return NextResponse.json({
      message: `Authorisation ${user ? "user" : "admin"}`,
      token: token,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
