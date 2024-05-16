import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from './schema'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
    throw new Error('Database URL not defined');
}
const queryClient = postgres(connectionString)
const dbConn = drizzle(queryClient, { schema });

export default dbConn;