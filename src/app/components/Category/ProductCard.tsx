/*This page is to display the product cards for each category*/
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../ui/button/ButtonPrimary";
import { ProductProp } from "@/types/global";

export default function ProductCard({ product }: ProductProp) {
  let reverseElem = product.id % 2 !== 0;

  return (
    <div>
      <div
        className={`mx-auto mb-28 flex w-4/5 flex-col items-center gap-8 ${
          reverseElem ? "lg:flex-row-reverse" : "lg:flex-row"
        } lg:justify-center`}
      >
        <div
          className={`w-full lg:w-2/3 ${
            reverseElem ? "flex justify-end" : null
          }`}
        >
          {/* Image Container */}
          <Image
            src={`/assets/images/products/${product.slug}/desktop/image-category-page-preview.jpg`}
            width={540}
            height={540}
            alt={`Image of ${product.name}`}
            className=" w-full rounded-lg "
          />
        </div>
        {/* Product Information */}
        <div
          className={`md:w-5/6 lg:w-2/3  ${
            reverseElem ? null : "flex justify-end"
          }`}
        >
          <div className="flex flex-col items-center gap-4 lg:w-2/3 lg:items-start">
            {product.new && (
              <p className="tracking-widest text-primary-700">NEW PRODUCT</p>
            )}
            <h3 className="text-center text-2xl font-bold uppercase tracking-wide lg:w-2/3 lg:text-start">
              {product.name}
            </h3>
            <p className="text-center leading-6 opacity-50 lg:text-start">
              {product.description}
            </p>
            <Link href={`/product/${product.id}`}>
              <ButtonPrimary
                type="button"
                label={"SEE PRODUCT"}
                style={"mt-4"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
