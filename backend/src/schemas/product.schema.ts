import {z} from "zod"

export const newProductvalidation=z.object({
    name:z.string(),

    sku:z.string(),

    price:z.string(),

    categoryId:z.number(),
    

});