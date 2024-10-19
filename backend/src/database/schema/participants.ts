import { pgTable, serial, smallint, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { participantsToBrackets } from "./participants-to-brackets";

export const participants = pgTable("participants", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	sequence: smallint("sequence").notNull(),
});

export const participantsRelations = relations(participants, ({ many }) => ({
	participantsToBrackets: many(participantsToBrackets)
}))
