import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { users } from "./users";
import { relations } from "drizzle-orm";
import { participantsToBrackets } from "./participants-to-brackets";

export const participants = pgTable("participants", {
	id: serial("id").primaryKey(),
	userId: integer("user_id").references(() => users.id),
	name: varchar("name", { length: 255 }).notNull(),
});

export const participantsRelations = relations(participants, ({ many }) => ({
	participantsToBrackets: many(participantsToBrackets)
}))
