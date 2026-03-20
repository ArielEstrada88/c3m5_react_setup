import { comparePassword } from "@/lib/auth";  
import { signToken } from "@/lib/jwt";  
import User from "@/database/models/User";  
import { NextResponse } from "next/server";  
  
export async function POST(req: Request) {  
  const { email, password } = await req.json();  
  
  const user = await User.findOne({ email });  
  
  if (!user) {  
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });  
  }  
  
  const isValid = await comparePassword(password, user.password);  
  
  if (!isValid) {  
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });  
  }  
  
  const token = signToken({ userId: user._id });  
  
  return NextResponse.json({ token });  
}