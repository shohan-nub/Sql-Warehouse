import { product } from "@/allType";

export const revalidate=10;

export default async function ProductPage() {
    const res=await fetch("http://localhost:3000/api/products");

    const result =await res.json();
    const products:product[]=result.data;

    return(<main>

        <div>
            <h1> All Product</h1><hr></hr><br></br>
            <a href="/dasboard/products/create">Add Product</a>
        </div>
        <div>
            {products.map((p)=>(
                <div key={p.id}>
                    <p>Name:{p.name}</p>
                    <p>sku:{p.sku}</p>
                    <p>Price:{p.price}</p><hr></hr>
                </div>
            ))}
        </div>
    </main>)
    
}