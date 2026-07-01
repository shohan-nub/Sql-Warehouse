

import { pgTable ,integer,serial,timestamp} from "drizzle-orm/pg-core";
import { products } from "./product";
import { warehouses } from "./warehouse";

export const inventories=pgTable("inventories",{
    id:serial("id").primaryKey(),
    productsId:integer("products_id").references(()=>products.id,{onDelete:"restrict"}).notNull(),
    warehouseId:integer("warehouse_id").references(()=>warehouses.id,{onDelete:"restrict"}).notNull(),
    quantity:integer("quantity").notNull(),
    createdAt:timestamp("created_at").defaultNow().notNull(),
    updatedAt:timestamp("updated_at").defaultNow().notNull()
});