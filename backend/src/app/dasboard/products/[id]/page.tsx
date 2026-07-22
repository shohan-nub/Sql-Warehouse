import { product } from "@/allType";

export default async function EditPage({params}:
    {params:Promise<{id:string}>}) {
        const {id} =await params;
        const res=await fetch(`http://localhost:3000/api/products/${id}`,{
            cache:"no-cache",});

        const products:product= await res.json();

        return(<main>
            i love u
        </main>)
    
}