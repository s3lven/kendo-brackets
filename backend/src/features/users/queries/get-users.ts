import { Request, Response } from "express";
import { users } from "../../../database/schema";
import { db } from "../../../database";
import asyncHandler from "express-async-handler";
import { UnauthorizedException } from "../../../utils/error-handling/http.exceptions";

export const getUsers = asyncHandler(
	async (request: Request, response: Response) => {
		// if (!request.user) {
		// 	throw new UnauthorizedException("User is not authenticated");
		// }

		const allUsers = await db
			.select({ id: users.id, email: users.email })
			.from(users);
		response.status(200).json(allUsers);
	}
);
