/*This page is to display the banner in split view of the Home Page*/
import Image from "next/image";
import Link from "next/link";
import ButtonSecondary from "../ui/button/ButtonSecondary";

export default function BannerSplit() {
  return (
    <div>
      <div className="mx-auto my-20 flex w-4/5 items-center justify-between py-32 pl-12">
        <div className="md:w-1/2 rounded-t-lg md:rounded-lg overflow-hidden">
          <Image
            src="/assets/images/pages/home/desktop/image-earphones-yx1.jpg"
            width={500}
            height={500}
            alt="speaker"
          />
        </div>
        <div className="flex bg-dark-800 w-1/2 justify-center p-24">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">YX1 EARPHONES</h3>
            <Link href="/product/yx1-earphones">
              <ButtonSecondary label="SEE PRODUCT" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
