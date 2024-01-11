/*This component is to display support-navigation */
import ButtonArrow from "../ui/button/ButtonArrow";
import Link from "next/link";
import Image from "next/image";

export default function SupportNav() {
  return (
    <div>
      <div className="mx-auto flex w-4/5 flex-col justify-center gap-24 md:flex-row md:gap-4 lg:gap-6 ">
        <div className="relative flex max-w-full flex-col items-center gap-3 rounded-lg bg-light-300 pb-7 pt-20 md:w-1/3 lg:px-20">
          <Image
            src="/assets/images/components/Categories/image-category-thumbnail-headphones.png"
            width={150}
            height={160}
            alt="headphone-thumbnail"
            className="absolute bottom-24"
          />
          <h3 className="text-sm font-bold lg:text-lg">HEADPHONES</h3>
          <Link href="/category/headphones">
            <ButtonArrow label={"SHOP"} />
          </Link>
        </div>

        <div className="relative flex max-w-full flex-col items-center gap-3 rounded-lg bg-light-300 pb-7 pt-20 md:w-1/3 lg:px-20">
          <Image
            src="/assets/images/components/Categories/image-category-thumbnail-speakers.png"
            width={150}
            height={160}
            alt="speaker-thumbnail"
            className="absolute bottom-24"
          />
          <h3 className="text-sm font-bold lg:text-lg">SPEAKERS</h3>
          <Link href="/category/earphones">
            <ButtonArrow label={"SHOP"} />
          </Link>
        </div>

        <div className="relative flex max-w-full flex-col items-center  gap-3 rounded-lg bg-light-300 pb-7 pt-20 md:w-1/3 lg:px-20">
          <Image
            src="/assets/images/components/Categories/image-category-thumbnail-earphones.png"
            width={150}
            height={160}
            alt="earphone-thumbnail"
            className="absolute bottom-24"
          />
          <h3 className="text-sm font-bold lg:text-lg">EARPHONES</h3>
          <Link href="/category/speakers">
            <ButtonArrow label={"SHOP"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
