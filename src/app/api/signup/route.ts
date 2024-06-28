import { NextResponse } from "next/server";
import prisma from "@/lib/prisma.config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type Body = {
  name: string;
  firstname: string;
  email: string;
  password: string;
  number: string;
  category: string[];
};

export async function POST(req: Request) {
  try {
    const { name, firstname, email, password, number, category }: Body =
      await req.json();

    if (
      !name ||
      !firstname ||
      !email ||
      !password ||
      !number ||
      !Array.isArray(category)
    ) {
      throw new Error("Invalid data");
    }

    const userVerifyMail = await prisma.user.findFirst({
      where: { email },
    });

    if (userVerifyMail) throw new Error("Email already exist");

    const userVerifyNumber = await prisma.user.findFirst({
      where: { number },
    });

    if (userVerifyNumber) throw new Error("Number already exist");

    const categories = await prisma.category.findMany({
      where: { name: { in: category } },
    });

    if (categories.length !== category.length)
      throw new Error("Some categories not found");

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        firstname,
        email,
        password: passwordHash,
        number,
        category: {
          connect: categories.map((e) => ({ id: e.id })),
        },
      },
      include: { category: true },
    });

    const tokenSecret = process.env.TOKEN_SECRET;

    const token = jwt.sign(
      { userId: newUser.userId, role: "user" },
      tokenSecret as string,
      { expiresIn: "24h" }
    );

    return NextResponse.json({
      message: "Successfully added user",
      data: newUser,
      token,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
