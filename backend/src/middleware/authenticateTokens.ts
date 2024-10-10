import { Response, NextFunction, Request } from "express";
import {
  verifyAccessToken,
  verifyRefreshToken,
  generateTokens,
  updateUserRefreshToken,
  getUserRefreshToken,
  setTokenCookies,
} from "../utils/tokens";
import logger from "./logger";

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.cookies["accessToken"];
  const refreshToken = req.cookies["refreshToken"];

  if (!accessToken && !refreshToken) {
    return res.status(401).json({ error: "Authentication required" });
  }

  let user = null;

  // Check access token
  if (accessToken) {
    user = verifyAccessToken(accessToken);
    if (user) {
      req.user = user;
      return next();
    }
  }

  logger.warn("Access token is invalid")

  // If access token is invalid or expired, check refresh token
  if (refreshToken) {
    user = verifyRefreshToken(refreshToken);
    if (user) {
      const storedRefreshToken = await getUserRefreshToken(user.userId);

      if (
        storedRefreshToken &&
        storedRefreshToken.refreshToken === refreshToken &&
        new Date(storedRefreshToken.refreshTokenExpiresAt!) > new Date()
      ) {
        // Generate new tokens
        const newTokens = generateTokens({
          userId: user.userId,
          email: user.email,
        });
        await updateUserRefreshToken(user.userId, newTokens.refreshToken);

        // Set new tokens
        req.user = user;

        // Set new tokens in cookies
        setTokenCookies(res, newTokens);

        logger.info("New tokens created")

        return next();
      }
    }
  }

  logger.warn("Refresh token is invalid")

  // If both tokens are invalid
  res.status(401).json({ error: "Invalid or expired tokens" });
};
