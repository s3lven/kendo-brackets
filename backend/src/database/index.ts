import { drizzle } from "drizzle-orm/neon-http";
import { schema } from "./schema";
import { neon } from "@neondatabase/serverless";
import dotenv from 'dotenv'

dotenv.config()
const sql = neon(process.env.DRIZZLE_DATABASE_URL!);


export const db = drizzle(sql, { schema });
