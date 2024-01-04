import Image from "next/image"
import { ProductProp } from "@/types/global"

export default function ProductHero( { product } : ProductProp){
    return (
        <div>
           <div>
                {/* Image Coontainer */}
                <Image
                    src ={`/assets/images/products/${product.slug}/desktop/image-product.jpg`} 
                    alt = {`Image of ${product.name}`}
                    width={540}
                    height= {540}
                />    
            </div> 
            {/* Product Information */}
            <div>
                {product.new && <p className="tracking-widest text-primary-700">NEW PRODUCT</p>}
                <h3 className="uppercase text-2xl font-bold w-1/3 tracking-wide">{product.name}</h3>
                <p className="font-bold">{product.price}</p>
            </div>
        </div>
    )
}