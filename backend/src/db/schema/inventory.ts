

import { pgTable ,integer,serial,timestamp} from "drizzle-orm/pg-core";
import { products } from "./product";
import { warehouses } from "./warehouse";
import { relations } from "drizzle-orm";

export const inventories=pgTable("inventories",{
    id:serial("id").primaryKey(),

    productsId:integer("products_id").
    references(()=>products.id,{onDelete:"restrict"}).notNull(),//need a relations

    warehouseId:integer("warehouse_id").
    references(()=>warehouses.id,{onDelete:"restrict"}).notNull(),//need a relation
   
    quantity:integer("quantity").notNull(),
    createdAt:timestamp("created_at").defaultNow().notNull(),
    updatedAt:timestamp("updated_at").defaultNow().notNull()
});


export const inventoryRelation=relations(inventories,({one})=>({
    product:one(products,{
        fields:[inventories.productsId],
        references:[products.id]
    }),

    warehouse:one(warehouses,{
        fields:[inventories.warehouseId],
        references:[warehouses.id]
    })


}),

)