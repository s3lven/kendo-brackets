import { Request, Response } from "express";
import { db } from "../../../database";
import { eq } from "drizzle-orm";
import { users } from "../../../database/schema";

export const getUserById = async (request: Request, response: Response) => {
  const userId = parseInt(request.params.id);

  if (!request.user) {
    return response.status(401).json({ error: 'User not authenticated' });
  }

  if (isNaN(userId)) {
    return response.status(400).json({ error: "Invalid user ID" });
  }

  try {
    const user = await db
      .select({ id: users.id, username: users.username })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    if (user.length === 0) {
      return response.status(404).json({ error: "User not found" });
    }

    response.json(user[0]);
  } catch (error) {
    console.error("Error fetching user:", error);
    response
      .status(500)
      .json({ error: "An error occurred while fetching the user" });
  }
};
