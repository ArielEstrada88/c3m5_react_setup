// lib/auth.ts
import bcrypt from "bcryptjs";
import { signToken, verifyToken } from "./jwt";

/**
 * Hash a plaintext password
 */
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

/**
 * Compare a plaintext password with a hashed one
 */
export async function comparePassword(password: string, hashed: string): Promise<boolean> {
  return await bcrypt.compare(password, hashed);
}

/**
 * Create a JWT auth token for a user
 */
export function createAuthToken(user: { _id: string; email: string }): string {
  return signToken({
    userId: user._id,
    email: user.email,
  });
}

/**
 * Verify a JWT token and return payload or null
 */
export function verifyAuthToken(token: string): object | null {
  return verifyToken(token);
}