import { pgTable, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { warehouses } from "./warehouse";
import { relations } from "drizzle-orm";
import { saleItems } from "./saleItem";

export const sales = pgTable("sales", {
  id: serial("id").primaryKey(),

  warehouseId: integer("warehouse_id")
    .references(() => warehouses.id, {
      onDelete: "restrict",
    })
    .notNull(),

  saleDate: timestamp("sale_date")
    .defaultNow()
    .notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull(),
});


export const saleRelation=relations(sales,({one,many})=>({

  warehouse:one(warehouses,{
    fields:[sales.warehouseId],
    references:[warehouses.id]
  }),

  saleitem:many(saleItems),
}))