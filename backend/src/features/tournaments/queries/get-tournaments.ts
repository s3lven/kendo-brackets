import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { db } from '../../../database';
import { tournaments } from '../../../database/schema';


export const getTouraments = asyncHandler(async (request: Request, response: Response) => {
    const allTournaments = await db
        .select({id: tournaments.id, tournamentName: tournaments.name, location: tournaments.location, status: tournaments.status})
        .from(tournaments);
    
    response.status(200).json(allTournaments);
})