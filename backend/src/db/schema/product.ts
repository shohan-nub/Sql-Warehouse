
import { pgTable,serial,text,numeric,timestamp,integer } from "drizzle-orm/pg-core";
import { categories } from "./category";
import { relations } from "drizzle-orm";
import { inventories } from "./inventory";
import { purchasedItem } from "./purchasedItem";
import { saleItems } from "./saleItem";



export const products= pgTable("products",{
    id:serial("id").primaryKey(),
    name:text("name").notNull(),
    sku:text("sku").unique().notNull(),
    price:numeric("price",{precision:10,scale:2}).notNull(),
    categoryId:integer("category_id").references(()=>categories.id),//eije
    createdAt:timestamp("create_at").defaultNow().notNull(),
    updatedAt:timestamp("update_at").defaultNow().notNull(),

}
);

export const productsRelation=relations(products,({one,many})=>({
      category:one(categories,{
        fields:[products.categoryId],
        references:[categories.id],
      }),


      inventory:many(inventories),
      purchasedItem:many(purchasedItem),
      saleItem:many(saleItems)

}))