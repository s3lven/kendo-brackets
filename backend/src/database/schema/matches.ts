import {
	integer,
	pgTable,
	serial,
	timestamp,
} from "drizzle-orm/pg-core";
import { brackets } from "./brackets";
import { participants } from "./participants";

export const matches = pgTable("matches", {
	id: serial("id").primaryKey(),
	bracketId: integer("bracket_id").references(() => brackets.id),
	participant1Id: integer("participant1_id").references(
		() => participants.id
	),
	participant2Id: integer("participant2_id").references(
		() => participants.id
	),
	score1: integer("score1"),
	score2: integer("score2"),
	winnerId: integer("winner_id").references(() => participants.id),
	updatedAt: timestamp("updated_at").defaultNow(),
});
