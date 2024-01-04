import Image from "next/image"
import ButtonPrimary from "../ui/button/ButtonPrimary"
import { ProductProp } from "@/types/global"
import { useState } from "react"

export default function ProductHero({ product }: ProductProp) {

    return (
        <div className="flex items-center justify-between">
            <div>
                {/* Image Container */}
                <Image
                    src={`/assets/images/products/${product.slug}/desktop/image-product.jpg`}
                    alt={`Image of ${product.name}`}
                    width={1000}
                    height={1000}
                    className="w-3/4"
                />
            </div>
            {/* Product Information */}
            <div className="w-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    {product.new && <p className="tracking-widest text-primary-700">NEW PRODUCT</p>}
                    <h3 className="uppercase text-2xl font-bold w-1/3 tracking-wide">{product.name}</h3>
                    <p className="opcacity-50">{product.description}</p>
                    <p className="font-bold">{`$ ${product.price.toLocaleString("en-US")}`}</p>
                </div>
                <div>
                    <ButtonPrimary
                        label={"ADD TO CART"}
                        type={"button"}
                        style={"w-3/12"}
                    />
                </div>
            </div>
        </div>
    )
}