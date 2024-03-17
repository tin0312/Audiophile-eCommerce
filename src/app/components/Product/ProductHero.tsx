import Image from "next/image";
import ButtonPrimary from "@/app/components/ui/button/ButtonPrimary";
import { ProductProp } from "@/types/global";
import AddToLS from "@/helpers/localStorage/AddToLS";

export default function ProductHero({ product }: ProductProp) {
  return (
    <div className="flex flex-col items-center gap-4  md:flex-row md:items-center md:justify-between">
      <div>
        {/* Image Container */}
        <Image
          src={`/assets/images/products/${product.slug}/desktop/image-product.jpg`}
          alt={`Image of ${product.name}`}
          width={1000}
          height={1000}
          className="w-100 md:w-3/4"
        />
      </div>
      {/* Product Information */}
      <div className="w-100 flex flex-col gap-8 md:w-1/2 md:gap-4">
        <div className="flex flex-col gap-4">
          {product.new && (
            <p className="tracking-widest text-primary-700">NEW PRODUCT</p>
          )}
          <h3 className="w-1/3 text-2xl font-bold uppercase tracking-wide">
            {product.name}
          </h3>
          <p className="opacity-50">{product.description}</p>
          <p className="font-bold">{`$ ${product.price.toLocaleString(
            "en-US",
          )}`}</p>
        </div>
        <div className="flex justify-start">
          <ButtonPrimary
            label={"ADD TO CART"}
            type={"button"}
            style={"w-5/12 md:w-3/12"}
            onClick={() => AddToLS(product)}
          />
        </div>
      </div>
    </div>
  );
}
