
import { newProductvalidation } from "@/schemas/product.schema";
import { ProductService } from "@/services/product.service";
import { success } from "zod";



const productsfService= new ProductService();

export async function GET() {
    
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
   const createProductService=new ProductService();

    try{
        const body=req.json();
        const validateData=newProductvalidation.parse(body)
        const createProducts=createProductService.createProduct(validateData)//connect
        
      return Response.json({
        message:`succecfully connect with serveice new product`,
        data:createProducts
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

export async function PATCH(req:Request,{params}:
    {params:Promise<{id:string}>}) {
        try{
             const {id} =await params;
         const body= await req.json();

         const forUpdate=await productsfService.
         updateProduct(Number(id),body);

         return Response.json({message:`succesfully connected`,
            data:forUpdate,
            success:true
         })
        }catch(error){
            console.log(error);

            return Response.json({message:`internel server error`},
                {status:500}
            )
             
         
        }


    
};

export default async function DELETE({params}:
    {params:Promise<{id:string}>}) {
         try{
            const {id} =await params;

            const deletedProduct=await productsfService.deleteProduct(Number(id));

            return Response.json({message:`deleted fun succesfull`,
                data:deletedProduct,
                success:true
            });

         }catch(error){
            console.log(error);
            return Response.json({message:`Interner server Error`,
                success:false
            },{
                status:500
            })
         }

    
}