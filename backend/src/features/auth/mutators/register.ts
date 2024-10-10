import { Request, Response } from "express";
import { db } from "../../../database";
import { users } from "../../../database/schema";
import { eq } from "drizzle-orm";
import {
	generateTokens,
	setTokenCookies,
	updateUserRefreshToken,
} from "../../../utils/tokens";
import bcrypt from "bcrypt";
import { RegisterRequestBody } from "../../../types/auth_t";

export const register = async (
	req: Request<{}, {}, RegisterRequestBody>,
	res: Response
) => {
	const { firstName, lastName, dojo, email, password } = req.body;

	try {
		// Check if user already exists
		const existingUser = await db
			.select()
			.from(users)
			.where(eq(users.email, email))
			.limit(1);

		if (existingUser.length > 0) {
			return res.status(409).json({
				error: "User with this email or username already exists",
			});
		}

		// Hash password
		const saltRounds = 10;
		const passwordHash = await bcrypt.hash(password, saltRounds);

		// Insert new user
		const [newUser] = await db
			.insert(users)
			.values({
				firstName,
				lastName,
				dojo,
				email,
				passwordHash,
				createdAt: new Date(),
				lastLogin: new Date(),
			})
			.returning({ id: users.id, email: users.email });

		// Generate tokens
		const tokens = generateTokens({
			userId: newUser.id,
			email: newUser.email,
		});
		await updateUserRefreshToken(newUser.id, tokens.refreshToken);

		setTokenCookies(res, tokens);

		res.status(201).json({ message: "Registration successful", email });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "An error occurred during registration",
		});
	}
};
