import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { matches } from "./matches";

// Scores table for storing individual points
export const scores = pgTable('scores', {
    id: serial('id').primaryKey(),
    matchId: integer('match_id').references(() => matches.id),
    playerId: integer('player_id').notNull(),
    scoreIndex: integer('score_index').notNull(), // Index in the score array
    scoreType: varchar('score_type', { length: 10 }), // IpponType
    createdAt: timestamp('created_at').defaultNow(),
  });