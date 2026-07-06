import { pgTable,numeric,integer,serial ,timestamp} from "drizzle-orm/pg-core";
import { products } from "./product";
import { purchases } from "./purchase";
import { relations } from "drizzle-orm";



export const purchasedItem=pgTable("purchasedItem",{
    id:serial("id").primaryKey(),
    
         productId:integer("product_id").
          references(()=>products.id,{onDelete:"restrict"}).notNull(),

         purchasedId:integer("purchased_id").
         references(()=>purchases.id,{onDelete:"cascade"}).notNull(),

    quantity:integer("quantity").notNull(),
    unitPrice:numeric("unit_price",{precision:10, scale:2}).notNull(),
    createdAt:timestamp("created_at").defaultNow().notNull(),
    updatedAt:timestamp("updatedAt").defaultNow().notNull(),


});

export const piRelation=relations(purchasedItem,({one,many})=>({

    product:one(products,{
        fields:[purchasedItem.productId],
        references:[products.id]
    }),
    purchased:one(purchases,{
        fields:[purchasedItem.purchasedId],
        references:[purchases.id]
    })



}))