/*This component is to display support-navigation */
import ButtonArrow from "../ui/button/ButtonArrow";
import Link from "next/link";
import Image from "next/image";

interface SupportNavProps {
  isMobileNav?: boolean;
}

export default function SupportNav({ isMobileNav }: SupportNavProps) {
  return (
    <div>
      <div
        className={`${
          isMobileNav ? "gap-14" : "gap-24"
        } mx-auto flex w-4/5 flex-col justify-center  md:flex-row md:gap-4 lg:gap-6 `}
      >
        <div
          className={` ${
            isMobileNav ? "gap-1 pb-4 pt-8" : "gap-3 pb-7 pt-20"
          }  relative flex max-w-full flex-col items-center  rounded-lg bg-light-300   md:w-1/3 lg:px-20`}
        >
          <Image
            src="/assets/images/components/Categories/image-category-thumbnail-headphones.png"
            width={150}
            height={160}
            alt="headphone-thumbnail"
            className={`${
              isMobileNav ? "bottom-14 w-1/3 md:w-3/4" : "bottom-24"
            } absolute  `}
          />
          <h3 className="text-sm font-bold  lg:text-lg">HEADPHONES</h3>
          <Link href="/category/headphones">
            <ButtonArrow label={"SHOP"} />
          </Link>
        </div>

        <div
          className={` ${
            isMobileNav ? "gap-1 pb-4 pt-8" : "gap-3 pb-7 pt-20"
          }  relative flex max-w-full flex-col items-center  rounded-lg bg-light-300   md:w-1/3 lg:px-20`}
        >
          <Image
            src="/assets/images/components/Categories/image-category-thumbnail-speakers.png"
            width={150}
            height={160}
            alt="speaker-thumbnail"
            className={`${
              isMobileNav ? "bottom-14 w-1/3 md:w-3/4" : "bottom-24"
            } absolute  `}
          />
          <h3 className="text-sm font-bold  lg:text-lg">SPEAKERS</h3>
          <Link href="/category/earphones">
            <ButtonArrow label={"SHOP"} />
          </Link>
        </div>

        <div
          className={` ${
            isMobileNav ? "gap-1 pb-4 pt-8" : "gap-3 pb-7 pt-20"
          }  relative flex max-w-full flex-col items-center  rounded-lg bg-light-300   md:w-1/3 lg:px-20`}
        >
          <Image
            src="/assets/images/components/Categories/image-category-thumbnail-earphones.png"
            width={150}
            height={160}
            alt="earphone-thumbnail"
            className={`${
              isMobileNav ? "bottom-14 w-1/3 md:w-3/4" : "bottom-24"
            } absolute  `}
          />
          <h3 className="text-sm font-bold  lg:text-lg">EARPHONES</h3>
          <Link href="/category/speakers">
            <ButtonArrow label={"SHOP"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
