import jwt from "jsonwebtoken";
import { db } from "../database";
import { users } from "../database/schema";
import { eq } from "drizzle-orm";
import { Response } from "express";

interface TokenPayload {
  userId: number;
  email: string;
}

export const generateTokens = (payload: TokenPayload) => {
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "1m",
  });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: "5m",
  });
  return { accessToken, refreshToken };
};

export const verifyAccessToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as TokenPayload;
  } catch (error) {
    return null;
  }
};

export const verifyRefreshToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!) as TokenPayload;
  } catch (error) {
    return null;
  }
};

export const updateUserRefreshToken = async (
  userId: number,
  refreshToken: string
) => {
  const refreshTokenExpiresAt = new Date(Date.now() + 1 * 1 * 5 * 60 * 1000);
  await db
    .update(users)
    .set({ refreshToken, refreshTokenExpiresAt })
    .where(eq(users.id, userId));
};

export const getUserRefreshToken = async (userId: number) => {
  const user = await db
    .select({
      refreshToken: users.refreshToken,
      refreshTokenExpiresAt: users.refreshTokenExpiresAt,
    })
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);
  return user[0] || null;
};

export const setTokenCookies = (res: Response, tokens: { accessToken: string, refreshToken: string }) => {
  res.cookie('accessToken', tokens.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1 * 60 * 1000 // 1 minute
  });

  res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1 * 1 * 5 * 60 * 1000 // 5 minutes
  });
};
