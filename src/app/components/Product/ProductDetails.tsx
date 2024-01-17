/*This page is to display the product details: features and whats in the box*/ 
import Accessory from "./Accessory"
import { ProductProp } from "@/types/global"

export default function ProductDetails({ product } : ProductProp){
    const Accessories = product.includes.map((item, index: number) => 
       <Accessory key={index} quantity={item.quantity} name={item.item}/>)

    return(
        // Detail container 
        <div className = "flex gap-32 pt-16">
            {/* Feature container */}
            <div className="w-1/2">
                <h5 className="uppercase font-bold text-xl pb-5">Features</h5>
                <p className="opacity-50">{product.features}</p>
            </div>
            {/* Accessories container */}
            <div className="flex flex-col">
                <h5 className="uppercase font-bold text-xl pb-5">In the box</h5>
                <div className="flex flex-col gap-3">
                    {Accessories}  
                </div>
            </div>
        </div>
    )
}