import { Request, Response } from "express";
import {
	generateTokens,
	getUserRefreshToken,
	setTokenCookies,
	updateUserRefreshToken,
	verifyRefreshToken,
} from "../../../utils/tokens";
import {
	ForbiddenException,
	UnauthorizedException,
} from "../../../utils/error-handling/http.exceptions";
import asyncHandler from "express-async-handler";

export const refreshToken = asyncHandler(
	async (req: Request, res: Response) => {
		const refreshToken = req.cookies["refreshToken"];

		if (!refreshToken) {
			throw new UnauthorizedException("No refresh token provided");
		}

		const user = verifyRefreshToken(refreshToken);
		if (user) {
			const storedRefreshToken = await getUserRefreshToken(user.userId);

			if (
				storedRefreshToken &&
				storedRefreshToken.refreshToken === refreshToken &&
				new Date(storedRefreshToken.refreshTokenExpiresAt!) > new Date()
			) {
				const newTokens = generateTokens({
					userId: user.userId,
					email: user.email,
				});
				await updateUserRefreshToken(
					user.userId,
					newTokens.refreshToken
				);

				setTokenCookies(res, newTokens);

				res.status(200).json({
					message: "Token refreshed successfully",
				});
			}
		} else {
			throw new ForbiddenException("Invalid refresh token");
		}
	}
);
