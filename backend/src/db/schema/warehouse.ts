import { relations } from "drizzle-orm";
import { pgTable,serial ,text,timestamp,} from "drizzle-orm/pg-core";
import { sales } from "./sales";
import { inventories } from "./inventory";
import { purchases } from "./purchase";




export const warehouses=pgTable("warehouses",{
      id:serial("id").primaryKey(),
      name:text("name").notNull().unique(),
      location:text("location").notNull(),
      createdAt:timestamp("created_at").defaultNow().notNull(),
      updatedAt:timestamp("updated_at").defaultNow().notNull(),
});


export const warehouseRelation=relations(warehouses,({one,many})=>({

      sale:many(sales),

      inventory:many(inventories),

      purchase:many(purchases),


}))