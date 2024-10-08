import { AuthRequest } from "../../../types/auth_t";
import { Response } from "express";
import { users } from "../../../database/schema";
import { db } from "../../../database";

export const getUsers = async (request: AuthRequest, response: Response) => {
  if (!request.user) {
    return response.status(401).json({ error: 'User not authenticated' });
  }

  try {
    const allUsers = await db
      .select({ id: users.id, username: users.username, email: users.email })
      .from(users);
    response.json(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    response
      .status(500)
      .json({ error: "An error occurred while fetching users" });
  }
};
