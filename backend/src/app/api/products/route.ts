import { newProduct } from "@/allType";
import { ProductService } from "@/services/product.service";

export async function GET() {
    const productsfService= new ProductService();
    try{
        const products= await productsfService.getAllProducts();

         return Response.json({
            message:`database has been connected succesfull`,
            success:true,
            data:products
         })

    }catch(error){
        console.log(error);
        return Response.json({
            massage:`problem in products db connection`,
            status:500,
        })
    }
    
};

export async function POST(req:Request) {
    const pService=new ProductService();

    try{
        const body= await req.json();
         const newProduct=await pService.createProduct(body);

        return Response.json({

        message:`input succesfully insert`,
        data:newProduct},
        {
        status:201
       })

    }catch(error){
        console.log(error);

        return Response.json({
            message:`post product problem`
        },{
            status:500
        })
    }

    
};