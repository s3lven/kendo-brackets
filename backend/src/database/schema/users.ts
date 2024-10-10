import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	firstName: text("firstName").notNull(),
	lastName: text("lastName").notNull(),
	dojo: text("dojo").notNull(),
	email: varchar("email", { length: 255 }).notNull().unique(),
	passwordHash: varchar("password_hash", { length: 255 }).notNull(),
	createdAt: timestamp("created_at").defaultNow(),
	lastLogin: timestamp("last_login"),
	refreshToken: text("refresh_token"),
	refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
});

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
