import { relations } from "drizzle-orm";
import { pgTable,serial,text,
    timestamp
 } from "drizzle-orm/pg-core";
import { products } from "./product";

 export const categories=pgTable("categories",{
    id:serial("id").primaryKey(),
    name:text("name").notNull(),
    createdAt:timestamp("created_at").defaultNow().notNull(),
    updateAt:timestamp("update_at").defaultNow().notNull()

 });

 export const categoryRelations=relations(categories,
   ({many})=>({products:many(products),})
 );