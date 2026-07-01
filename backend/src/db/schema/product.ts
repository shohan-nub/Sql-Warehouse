
import { pgTable,serial,text,numeric,timestamp,integer } from "drizzle-orm/pg-core";
import { categories } from "./category";



export const products= pgTable("products",{
    id:serial("id").primaryKey(),
    name:text("name").notNull(),
    sku:text("sku").unique().notNull(),
    price:numeric("price",{precision:10,scale:2}).notNull(),
    categoryId:integer("category_id").references(()=>categories.id),
    createdAt:timestamp("create_at").defaultNow().notNull(),
    updatedAt:timestamp("update_at").defaultNow().notNull(),

}
);