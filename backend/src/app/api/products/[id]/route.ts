import { ProductService } from "@/services/product.service";

const productService=new ProductService();

export async function GET(req:Request,{params}:
{params:Promise<{id:number}>}) {
    
    const {id} = await params;
        try{ 
            const singleProduct=productService.singleProduct(id);
            
            return Response.json(singleProduct);
        }catch(error){
            console.log(error)
             return Response.json({message:`cannot connect to single product db`})
        }
    
}