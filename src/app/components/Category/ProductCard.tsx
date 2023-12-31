/*This page is to display the product cards for each category*/
import Image from "next/image"
import Link from "next/link"
import ButtonPrimary from "../ui/button/ButtonPrimary"
import { ProductProp } from "@/types/global"


export default function ProductCard({ product }: ProductProp) {

    return (
        <div>
            <div className="w-4/5 mx-auto my-40 flex items-center">
                <div className="w-1/2">
                    {/* Image Container */}
                    <Image
                        src={`/assets/images/products/${product.slug}/desktop/image-category-page-preview.jpg`}
                        width={540}
                        height={540}
                        alt={`Image of ${product.name}`}
                        className="w-3/4"
                    />
                </div>
                {/* Product Information */}
                <div className="flex justify-end w-1/2">
                    <div className="flex flex-col gap-4 w-2/3">  {product.new && <p className="tracking-widest text-primary-700">NEW PRODUCT</p>}
                        <h3 className="uppercase text-2xl font-bold w-1/3 tracking-wide">{product.name}</h3>
                        <p className="opacity-50 leading-6">{product.description}</p>
                        <Link href={`/product/${product.id}`}>
                            <ButtonPrimary
                                type="button"
                                label={"SEE PRODUCT"}
                                style={"mt-4"}
                            />
                        </Link></div>

                </div>
            </div>
        </div>
    )
}