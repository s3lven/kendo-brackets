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
import { BadRequestException } from "../../../utils/error-handling/http.exceptions";
import asyncHandler from "express-async-handler";

export const register = asyncHandler(
	async (req: Request<{}, {}, RegisterRequestBody>, res: Response) => {
		const { firstName, lastName, dojo, email, password } = req.body;

		// Check if user already exists
		const existingUser = await db
			.select()
			.from(users)
			.where(eq(users.email, email))
			.limit(1);

		if (existingUser.length > 0) {
			throw new BadRequestException(
				"User with this email or username already exists"
			);
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
	}
);
