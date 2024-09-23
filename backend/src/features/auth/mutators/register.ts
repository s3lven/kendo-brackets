import { Request, Response } from "express";
import { db } from "../../../database";
import { users } from "../../../database/schema";
import { eq, or } from "drizzle-orm";
import { generateTokens, setTokenCookies, updateUserRefreshToken } from "../../../utils/tokens";
import bcrypt from "bcrypt";

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ error: "Username, email, and password are required" });
  }

  try {
    // Check if user already exists
    const existingUser = await db
      .select()
      .from(users)
      .where(or(eq(users.email, email), eq(users.username, username)))
      .limit(1);

    if (existingUser.length > 0) {
      return res
        .status(409)
        .json({ error: "User with this email or username already exists" });
    }

    // Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Insert new user
    const [newUser] = await db
      .insert(users)
      .values({
        username,
        email,
        passwordHash,
        createdAt: new Date(),
        lastLogin: new Date(),
      })
      .returning({ id: users.id, email: users.email });

    // Generate tokens
    const tokens = generateTokens({ userId: newUser.id, email: newUser.email });
    await updateUserRefreshToken(newUser.id, tokens.refreshToken);

    setTokenCookies(res, tokens);

    res.status(201).json({ message: 'Registration successful', username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during registration" });
  }
};
