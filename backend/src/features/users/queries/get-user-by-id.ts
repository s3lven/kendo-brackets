import { Request, Response } from "express";
import { db } from "../../../database";
import { eq } from "drizzle-orm";
import { users } from "../../../database/schema";
import asyncHandler from 'express-async-handler'
import { BadRequestException } from "../../../utils/error-handling/http.exceptions";

export const getUserById = asyncHandler(async (request: Request, response: Response) => {
  const userId = parseInt(request.params.id);

  if (isNaN(userId)) {
    throw new BadRequestException("Invalid user ID")
  }

  try {
    const user = await db
      .select({ id: users.id, email: users.email })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    if (user.length === 0) {
      response.status(404).json({ error: "User not found" });
    }

    response.json(user[0]);
  } catch (error) {
    console.error("Error fetching user:", error);
    response
      .status(500)
      .json({ error: "An error occurred while fetching the user" });
  }
});
