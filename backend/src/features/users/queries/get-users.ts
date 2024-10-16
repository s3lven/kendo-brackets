import { Request, Response } from "express";
import { users } from "../../../database/schema";
import { db } from "../../../database";
import asyncHandler from "express-async-handler";

export const getUsers = asyncHandler(
	async (request: Request, response: Response) => {
		const allUsers = await db
			.select({ id: users.id, email: users.email })
			.from(users);
		response.status(200).json(allUsers);
	}
);
