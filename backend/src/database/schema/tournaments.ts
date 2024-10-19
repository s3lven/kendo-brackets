import {
	integer,
	pgTable,
	serial,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const tournaments = pgTable("tournaments", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	location: varchar("location", { length: 255 }).notNull(),
	status: varchar("status", { length: 20 }).notNull(),
	creatorId: integer("creator_id").references(() => users.id),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
	// schedule column?
});

export type InsertUser = typeof tournaments.$inferInsert;
export type SelectUser = typeof tournaments.$inferSelect;
