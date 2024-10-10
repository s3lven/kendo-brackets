import { Request, Response } from "express";
import { db } from "../../../database";
import { users } from "../../../database/schema";
import { eq } from "drizzle-orm";
import {
	generateTokens,
	setTokenCookies,
	updateUserRefreshToken,
} from "../../../utils/tokens";

export const login = async (req: Request, res: Response) => {
	const { email } = req.body;

	try {
		const user = await db
			.select()
			.from(users)
			.where(eq(users.email, email))
			.limit(1);

		const tokens = generateTokens({
			userId: user[0].id,
			email: user[0].email,
		});
		await updateUserRefreshToken(user[0].id, tokens.refreshToken);

		setTokenCookies(res, tokens);

		// Update last login
		await db
			.update(users)
			.set({ lastLogin: new Date() })
			.where(eq(users.id, user[0].id));

		res.status(200).json({
			message: "Login successful",
			email: user[0].email,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "An error occurred during login" });
	}
};
