import {
  pgTable,
  serial,
  integer,
  numeric,
  timestamp,
} from "drizzle-orm/pg-core";

import { sales } from "./sales"
import { products } from "./product";
import { relations } from "drizzle-orm";

export const saleItems = pgTable("sale_items", {
  id: serial("id").primaryKey(),

  saleId: integer("sale_id")
    .references(() => sales.id, {
      onDelete: "cascade",
    })
    .notNull(),

  productId: integer("product_id")
    .references(() => products.id, {
      onDelete: "restrict",
    })
    .notNull(),

  quantity: integer("quantity").notNull(),

  unitPrice: numeric("unit_price", {
    precision: 10,
    scale: 2,
  }).notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull(),
});


export const saleItemRelation=relations(saleItems,({one})=>({
  product:one(products,{
    fields:[saleItems.productId],
    references:[products.id]
  }),

  sale:one(sales,{
    fields:[saleItems.saleId],
    references:[sales.id]
  })
}))