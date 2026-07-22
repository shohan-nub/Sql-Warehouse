import { newProduct} from "@/allType";
import { db } from "@/db/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";

export class productRepository{
    async getAll(){
        return db.query.products.findMany();
 
    };

    async createPro(data:newProduct){

        const [newProducts]=await db.insert(products)
        .values(data).returning();
        
        return newProducts;
    };

    async getbyId(id:number){
        const [singleProduct]=await db.select().
        from(products).where(eq(products.id,id))

        return singleProduct;      
    }

    async update(id:number,data:Partial<newProduct>){
        const [updatedProduct]=(
            await db.update(products).
              set(data).where(eq(products.id,id)).returning()
            )
    return updatedProduct;

    };

    async delete(id:number){
        const [deletedProduct]= await db.delete(products).
        where(eq(products.id,id)).returning();

        return deletedProduct;
    }
};

