import { Request, Response } from "express";
import { db } from "../../../database";
import { users } from "../../../database/schema";
import { eq } from "drizzle-orm";

export const logout = async (req: Request, res: Response) => {
  const refreshToken = req.cookies["refreshToken"];

  if (refreshToken) {
    // Clear the refresh token in the database
    await db
      .update(users)
      .set({ refreshToken: null, refreshTokenExpiresAt: null })
      .where(eq(users.refreshToken, refreshToken));
  }

  // Clear the token cookies
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  res.status(200).json({ message: "Logged out successfully" });
};
