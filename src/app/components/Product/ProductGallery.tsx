import Image from "next/image"
import { ProductProp } from "@/types/global"


export default function ProductGallery({ product }: ProductProp) {
    return (
        // Product Detail Gallery
        <section>
            <div className="flex gap-4 mt-16">
                {/* Small image container */}
                <div className = "flex gap-4 flex-col">
                    {/* Firts small image*/}
                    <Image
                        src={`/assets/images/products/${product.slug}/desktop/image-gallery-1.jpg`}
                        width={900}
                        height={560}
                        className="hidden h-1/2 rounded-lg tablet:block"
                        alt={`{product.name} image`}
                    />
                    <Image
                        src={`/assets/images/products/${product.slug}/mobile/image-gallery-1.jpg`}
                        width={900}
                        height={560}
                        className="block h-1/2 rounded-lg tablet:hidden"
                        alt={`{product.name} image`}
                    />
                    <Image
                        src={`/assets/images/products/${product.slug}/tablet/image-gallery-1.jpg`}
                        width={900}
                        height={560}
                        className="hidden h-1/2 rounded-lg tablet:block"
                        alt={`{product.name} image`}
                    />
                    {/* Second small image */}

                    <Image
                        src={`/assets/images/products/${product.slug}/desktop/image-gallery-2.jpg`}
                        width={900}
                        height={560}
                        className="hidden h-1/2 rounded-lg tablet:block"
                        alt={`{product.name} image`}
                    />
                    <Image
                        src={`/assets/images/products/${product.slug}/mobile/image-gallery-2.jpg`}
                        width={900}
                        height={560}
                        className="block h-1/2 rounded-lg tablet:hidden"
                        alt={`{product.name} image`}
                    />
                    <Image
                        src={`/assets/images/products/${product.slug}/tablet/image-gallery-2.jpg`}
                        width={900}
                        height={560}
                        className="hidden h-1/2 rounded-lg tablet:block"
                        alt={`{product.name} image`}
                    />
                </div>
                {/* Large image */}
                <Image
                    src={`/assets/images/products/${product.slug}/desktop/image-gallery-3.jpg`}
                    width={900}
                    height={1270}
                    className="hidden h-full rounded-lg tablet:block"
                    alt={`{product.name} image`}
                />
                <Image
                    src={`/assets/images/products/${product.slug}/mobile/image-gallery-3.jpg`}
                    width={900}
                    height={1270}
                    className="block h-full rounded-lg tablet:hidden"
                    alt={`{product.name} image`}
                />
                <Image
                    src={`/assets/images/products/${product.slug}/tablet/image-gallery-3.jpg`}
                    width={600}
                    height={800}
                    className="hidden h-full rounded-lg tablet:block"
                    alt={`{product.name} image`}
                />
            </div>

        </section>
    )
}