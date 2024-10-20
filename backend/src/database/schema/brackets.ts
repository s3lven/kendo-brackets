import {
	integer,
	pgTable,
	serial,
	smallint,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";
import { tournaments } from "./tournaments";
import { sql } from "drizzle-orm/sql";
import { relations } from "drizzle-orm";
import { participantsToBrackets } from "./participants-to-brackets";

export const brackets = pgTable("brackets", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	type: varchar("type", { length: 255 }).notNull(),
	status: varchar("status", { length: 255 }).notNull(),
	bracketCode: varchar("bracket_code", { length: 8 })
		.notNull()
		.unique()
		.default(sql`substring(md5(random()::text) from 1 for 8)`),
	tournamentId: integer("tournament_id").references(() => tournaments.id),
	version: integer("version").notNull().default(1),
	updatedAt: timestamp("updated_at").defaultNow(),
	progress: smallint("progress").default(0).notNull()
});

export const bracketRelations = relations(brackets, ({ many }) => ({
	participantsToBrackets: many(participantsToBrackets)
}))
