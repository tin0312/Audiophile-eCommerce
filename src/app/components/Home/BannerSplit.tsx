/*This page is to display the banner in split view of the Home Page*/
import Image from "next/image";
import Link from "next/link";
import ButtonSecondary from "../ui/button/ButtonSecondary";

export default function BannerSplit() {
  return (
    <div>
      <div className="mx-auto my-20 flex rounded-md w-4/5 items-center gap-6">
        {/* Image Container */}
        <div className="w-1/2 rounded-md">
          <Image
            src="/assets/images/pages/home/desktop/image-earphones-yx1.jpg"
            alt="speaker"
            width={540}
            height={320} 
            className="w-full object-cover h-72"
          />
        </div>
        {/* Info Container */}
          <div className="flex flex-col gap-4 rounded-md bg-dark-800 w-1/2 h-full justify-start p-24">
            <h3 className="text-xl font-bold">YX1 EARPHONES</h3>
            <Link href="/product/1">
              <ButtonSecondary label="SEE PRODUCT" />
            </Link>
          </div>
        </div>
    </div>
  );
}
