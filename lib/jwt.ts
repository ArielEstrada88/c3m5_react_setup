import jwt from "jsonwebtoken"; // JwtPayload not needed
// Centralized, validated secret
const JWT_SECRET: string = process.env.JWT_SECRET ?? "";

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

/**
 * Sign a JWT token with the given payload.
 * @param payload - The object to include in the token
 * @returns A signed JWT string
 */
export function signToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

/**
 * Verify a JWT token and return the decoded payload.
 * @param token - The JWT string to verify
 * @returns The decoded payload as an object, or null if verification fails
 */
export function verifyToken(token: string): object | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // Ensure return type is always an object
    return typeof decoded === "string" ? { data: decoded } : decoded;
  } catch {
    return null;
  }
}