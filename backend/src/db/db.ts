import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from"./schema";

const dbcManager=new Pool({
    connectionString:process.env.DATABASE_URL,
});

export const db=drizzle(dbcManager,{schema,});


