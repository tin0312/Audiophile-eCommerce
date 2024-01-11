/*This page is to display the banner in split view of the Home Page*/
import Image from "next/image";
import Link from "next/link";
import ButtonSecondary from "../ui/button/ButtonSecondary";

export default function BannerSplit() {
  return (
    <div>
      <div className="mx-auto my-10 flex w-4/5 flex-col items-center gap-6 rounded-xl md:flex-row">
        {/* Image Container */}
        <div className="md:w-1/2">
          <Image
            src="/assets/images/pages/home/desktop/image-earphones-yx1.jpg"
            alt="speaker"
            width={540}
            height={320}
            className="h-52 w-full rounded-xl object-cover md:h-72"
          />
        </div>
        {/* Info Container */}
        <div className="flex w-full flex-col items-center  justify-start gap-4 rounded-md bg-dark-800 p-10 md:h-72 md:w-1/2 md:justify-center lg:p-24">
          <h3 className="text-2xl font-bold lg:text-4xl">YX1 EARPHONES</h3>
          <Link href="/product/yx1-earphones">
            <ButtonSecondary label="SEE PRODUCT" />
          </Link>
        </div>
      </div>
    </div>
  );
}
