import { Request, Response } from "express";
import asyncHandler from 'express-async-handler'
import { db } from "../../../database";
import { brackets, participants, participantsToBrackets, tournaments } from "../../../database/schema";
import { eq } from "drizzle-orm";
import { NotFoundException } from "../../../utils/error-handling/http.exceptions";

export const getBracketInfo = asyncHandler(async (request: Request, response: Response) => {
    const bracketCode = request.params.code
    const bracketInfo = await db
        .query.brackets.findFirst({
            where: eq(brackets.bracketCode, bracketCode)
        })

    if (!bracketInfo) throw new NotFoundException(`Bracket with code ${bracketCode} not found`)


    const tournamentId = bracketInfo?.tournamentId
    if (!tournamentId) throw new NotFoundException("Bracket does not have a tournamentId")


    const tournament = await db
        .query.tournaments.findFirst({
            where: eq(tournaments.id, tournamentId)
        }) 
    if (!tournament) throw new NotFoundException(`Tournament with id ${tournamentId} not found`)


    const participantsList = await db
        .select({id: participants.id, name: participants.name, sequence: participants.sequence})
        .from(participantsToBrackets)
        .leftJoin(participants, eq(participantsToBrackets.participantId, participants.id))
        .where(eq(participantsToBrackets.bracketId, bracketInfo.id))

    if (!participantsList) throw new Error('Something went wrong!')

    const responseObject = {
        bracketName: bracketInfo.name,
        bracketType: bracketInfo.type,
        status: bracketInfo.status,
        bracketCode: bracketInfo.bracketCode,
        tournamentName: tournament.name,
        progress: bracketInfo.progress,
        slots: participantsList
    }
        

    response.status(200).json(responseObject)

})