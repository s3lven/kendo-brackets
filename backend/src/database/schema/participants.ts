import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { users } from "./users";
import { brackets } from "./brackets";

export const participants = pgTable("participants", {
  id: serial("id").primaryKey(),
  bracket_id: integer("bracket_id").references(() => brackets.id),
  userId: integer("user_id").references(() => users.id),
  name: varchar("name", { length: 255 }).notNull(),
});
