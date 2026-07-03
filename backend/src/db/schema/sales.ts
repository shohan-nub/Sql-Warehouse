import { pgTable, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { warehouses } from "./warehouse";

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