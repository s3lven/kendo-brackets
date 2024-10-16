import { Request, Response } from "express";
import { db } from "../../../database";
import { eq } from "drizzle-orm";
import { brackets } from "../../../database/schema";
import asyncHandler from 'express-async-handler'
import { BadRequestException } from "../../../utils/error-handling/http.exceptions";

export const getBracketsById = asyncHandler(async (request: Request, response: Response) => {
  const tournamentId = parseInt(request.params.id);

  if (isNaN(tournamentId)) {
    throw new BadRequestException("Invalid tournament ID")
  }

    const allBrackets = await db
      .select({id: brackets.id, bracketName: brackets.name, bracketType: brackets.type, status: brackets.status, bracketCode: brackets.bracketCode})
      .from(brackets)
      .where(eq(brackets.tournamentId, tournamentId));

    if (allBrackets.length === 0) {
      response.status(404).json({ error: "User not found" });
    }

    response.json(allBrackets);
});