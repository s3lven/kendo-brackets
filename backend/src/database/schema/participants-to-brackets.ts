import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { participants } from "./participants";
import { brackets } from "./brackets";
import { relations } from "drizzle-orm";

export const participantsToBrackets = pgTable('participants_to_brackets', {
    participantId: integer('participant_id').notNull().references(() => participants.id),
    bracketId: integer('bracket_id').notNull().references(() => brackets.id),
}, (table) => ({
    primaryKey: primaryKey({ columns: [table.participantId, table.bracketId]})
}))

export const participantsToBracketsRelations = relations(participantsToBrackets, ({ one }) => ({
    participants: one(participants, {
        fields: [participantsToBrackets.participantId],
        references: [participants.id]
    }),
    brackets: one(brackets, {
        fields: [participantsToBrackets.bracketId],
        references: [brackets.id]
    }),
}))