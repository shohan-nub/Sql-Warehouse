
import { pgTable,serial,text,timestamp,integer } from "drizzle-orm/pg-core";
import { warehouses } from "./warehouse";
import { suppliers } from "./supplier";
import { relations } from "drizzle-orm";
import { purchasedItem } from "./purchasedItem";


export const purchases=pgTable("purchases",{
    id:serial("id").primaryKey(),

       warehouseId:integer("warehouse_id")
        .references(()=>warehouses.id,{onDelete:"restrict"}),
    
       supplierId:integer("supplier_id")
        .references(()=>suppliers.id,{onDelete:"restrict"}),

    createdAt:timestamp("created_at").defaultNow().notNull(),
    updatedAt:timestamp("updated_at").defaultNow().notNull(),
    purchaseDate:timestamp("purchase_date").defaultNow().notNull(),

});


export const purchaseRelation=relations(purchases,({one,many})=>({
    warehouse:one(warehouses,{
        fields:[purchases.warehouseId],
        references:[warehouses.id]
    }),

    item:many(purchasedItem),

    supplier:one(suppliers,{
        fields:[purchases.supplierId],
        references:[suppliers.id]
    })

}))