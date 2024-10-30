import { drizzle } from "drizzle-orm/neon-serverless";
import { schema } from "./schema";
import { Pool } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();
const setupDatabase = () => {
    const pool = new Pool({
        connectionString: process.env.DRIZZLE_DATABASE_URL,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 5000,
    });

    // Handle pool errors
    pool.on("error", (err, client) => {
        console.error("Unexpected error on idle client", err);
        // Optionally restart the pool or exit the process
        // process.exit(-1);
    });

    // Handle pool connect errors
    pool.on("connect", (client) => {
        client.on("error", (err) => {
            console.error("Database client error:", err);
        });
    });

    // When you're done with the connection (e.g., when shutting down your server)
    // Make sure to close the pool
    process.on("SIGTERM", () => {
        pool.end();
    });

    return drizzle(pool, { schema });
};

// Initialize drizzle with the WebSocket pool
export const db = setupDatabase();
