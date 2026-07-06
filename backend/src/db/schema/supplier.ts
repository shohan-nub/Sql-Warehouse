
import { relations } from "drizzle-orm";
import { pgTable ,text,serial,timestamp} from "drizzle-orm/pg-core";
import { purchases } from "./purchase";



export const suppliers=pgTable("suppliers",{
    id:serial("id").primaryKey(),
    name:text("name").notNull(),
    email:text("email").unique().notNull(),
    phone:text("phone").unique().notNull(),
    address:text("address").notNull(),
    createdAt:timestamp("created_at").defaultNow().notNull(),
    updatedAt:timestamp("updated_at").defaultNow().notNull(),
});

export const supplyRelation=relations(suppliers,({many})=>({
    purchased:many(purchases)
})
)