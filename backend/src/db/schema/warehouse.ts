import { pgTable,serial ,text,timestamp,} from "drizzle-orm/pg-core";




export const warehouses=pgTable("warehouses",{
      id:serial("id").primaryKey(),
      name:text("name").notNull().unique(),
      location:text("location").notNull(),
      createdAt:timestamp("created_at").defaultNow().notNull(),
      updatedAt:timestamp("updated_at").defaultNow().notNull(),
});