import { newPurchase } from "@/allType";
import { db } from "@/db/db";
import { purchases } from "@/db/schema";

 export class PurchaseRepository{
    async createNewPurchase(data:newPurchase){

        const [purchased]= await db.insert(purchases)
        .values(data).returning();

        return purchased;
        
    }
 }