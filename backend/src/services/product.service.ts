import { newProduct } from "@/allType";
import { productRepository } from "@/repositories/product.repository";

export class ProductService {

    private repository = new productRepository();

    async getAllProducts() {

        return this.repository.getAll();

    };

    async createProduct(data:newProduct) {

        return this.repository.createPro(data);
    };

    async singleProduct(id:number){
        const singleProduct=await this.
        repository.getbyId(id);

        if(!singleProduct){
            throw new Error("Product not found");
        }
        return singleProduct;

    }

   async updateProduct(id:number,data:Partial<newProduct>){
      const updatedProduct= await this.repository.update(id,data);
      if(!updatedProduct){
        throw new Error(`product not found go repo`)
      }

   };

   async deleteProduct(id:number){
    const deletedProduct=await this.repository.delete(id);
    if(!deletedProduct){
        throw new Error(`repo server error`)
    }
   }

};