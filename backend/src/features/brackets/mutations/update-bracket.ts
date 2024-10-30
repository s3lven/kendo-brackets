import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { db } from "../../../database";
import {
    brackets,
    participants,
    participantsToBrackets,
} from "../../../database/schema";
import { eq, and, sql, inArray } from "drizzle-orm";
import { NotFoundException } from "../../../utils/error-handling/http.exceptions";

// TODO: Add this to a shared types folder
type Slot = {
    name: string;
    sequence: number;
    id: number;
};

export const updateBracket = asyncHandler(
    async (request: Request, response: Response) => {
        const updates = request.body;
        const { bracketCode } = request.params;

		console.log(updates)

        const bracket = await db
            .select()
            .from(brackets)
            .where(eq(brackets.bracketCode, bracketCode))

        if (bracket.length === 0) {
            throw new NotFoundException(
                `Bracket code ${bracketCode} does not exist`
            );
        }

		const bracketId = bracket[0].id

        await db.transaction(async (tx) => {
            for (const update of updates) {
                if (update.store === "slots") {
                    const participantsData = update.value;

                    // Get existing participants for this bracket
                    const existingRelations = await tx
                        .select({
                            participantId: participantsToBrackets.participantId,
                        })
                        .from(participantsToBrackets)
                        .where(
                            eq(participantsToBrackets.bracketId, bracketId)
                        );

                    const existingParticipantIds = existingRelations.map(
                        (r) => r.participantId
                    );
                    const updatedParticipantIds = participantsData.map(
                        (p: Slot) => p.id
                    );

                    // Update all participants in a single query
                    await tx
                        .insert(participants)
                        .values(
                            participantsData.map((p: Slot) => ({
                                id: p.id,
                                name: p.name,
                                sequence: p.sequence,
                            }))
                        )
                        .onConflictDoUpdate({
                            target: participants.id,
                            set: {
                                name: sql`EXCLUDED.name`,
                                sequence: sql`EXCLUDED.sequence`,
                            },
                        });

                    // Create missing relationships in a single query
                    const newParticipantIds = updatedParticipantIds.filter(
                        (id: number) => !existingParticipantIds.includes(id)
                    );

                    if (newParticipantIds.length > 0) {
                        await tx.insert(participantsToBrackets).values(
                            newParticipantIds.map((participantId: number) => ({
                                participantId,
                                bracketId: bracketId,
                            }))
                        );
                    }

					// Remove old relationships in a single query
					const participantsToRemove = existingParticipantIds.filter(
						id => !updatedParticipantIds.includes(id)
					  );
					  
					  if (participantsToRemove.length > 0) {
						await tx
						  .delete(participantsToBrackets)
						  .where(
							and(
							  eq(participantsToBrackets.bracketId, bracketId),
							  inArray(participantsToBrackets.participantId, participantsToRemove)
							)
						  );
					  }
			
					  // Update bracket version and timestamp
					  await tx
						.update(brackets)
						.set({ 
						  version: bracket[0].version + 1,
						  updatedAt: new Date()
						})
						.where(eq(brackets.id, bracketId));
                }

                // Add more for tournament, bracket, and match
            }

            response
                .status(200)
                .json({ success: true, message: "Bracket has been updated" });
        });
    }
);
