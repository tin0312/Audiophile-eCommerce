/*This page is to display the product cards for each category*/
import Image from "next/image"
import Link from "next/link"
import ButtonPrimary from "../ui/button/ButtonPrimary"
import { ProductProp } from "@/types/global"

export default function ProductCard({ product } : ProductProp){
    return (
        <div>
            <div className="w-4/5 mx-auto">
                <div>
                    {/* Image Container */}
                    <Image 
                    src = {``}
                    width={350}
                    height={390}
                    alt= {`Image of ${product.productName}`}
                    />
                </div>
                    {/* Product Information */}
                <div className="flex flex-col">
                    <h3></h3>
                    <p></p>  
                    <Link href={``}>
                        <ButtonPrimary 
                        type = "button"
                        label = {"SEE PRODUCT"}
                        style = {"mt-4"}
                    />
                    </Link>
                </div> 
            </div>
        </div>
    )
}