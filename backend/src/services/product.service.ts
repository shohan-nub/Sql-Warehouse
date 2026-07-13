import { newProduct } from "@/allType";
import { productRepository } from "@/repositories/product.repository";

export class ProductService {

    private repository = new productRepository();

    async getAllProducts() {

        return this.repository.getAll();

    };

    async createProduct(data:newProduct) {

        return this.repository.createPro(data);
    }

   

};