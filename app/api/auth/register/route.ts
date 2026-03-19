import { hashPassword } from "@/lib/auth";
import { signToken } from "@/lib/jwt";
import User from "@/database/models/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const hashed = await hashPassword(password);

  const user = await User.create({
    email,
    password: hashed,
  });

  const token = signToken({ userId: user._id });

  return NextResponse.json({ token });
}