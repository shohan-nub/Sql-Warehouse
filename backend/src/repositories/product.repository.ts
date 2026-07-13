import { newProduct, product } from "@/allType";
import { db } from "@/db/db";
import { products } from "@/db/schema";

export class productRepository{
    async getAll(){
        return db.query.products.findMany();
 
    };

    async createPro(data:newProduct){

        const [newProducts]=await db.insert(products)
        .values(data).returning();
        
        return newProducts;
    }
};