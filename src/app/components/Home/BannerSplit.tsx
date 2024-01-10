/*This page is to display the banner in split view of the Home Page*/
import Image from "next/image";
import Link from "next/link";
import ButtonSecondary from "../ui/button/ButtonSecondary";

export default function BannerSplit() {
  return (
    <div>
      <div className="md:flex-row mx-auto my-10 flex w-4/5 flex-col items-center gap-6 rounded-xl">
        {/* Image Container */}
        <div className="md:w-1/2">
          <Image
            src="/assets/images/pages/home/desktop/image-earphones-yx1.jpg"
            alt="speaker"
            width={540}
            height={320}
            className="h-72 w-full rounded-xl  object-cover"
          />
        </div>
        {/* Info Container */}
        <div className="md:w-1/2 lg:p-24 md:h-72 md:justify-center  flex w-full flex-col items-center justify-start gap-4 rounded-md bg-dark-800 p-10">
          <h3 className="lg:text-4xl text-2xl font-bold">YX1 EARPHONES</h3>
          <Link href="/product/yx1-earphones">
            <ButtonSecondary label="SEE PRODUCT" />
          </Link>
        </div>
      </div>
    </div>
  );
}
