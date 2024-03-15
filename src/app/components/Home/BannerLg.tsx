/*This page is to display the large banner of the Home Page*/
import Image from "next/image";
import Link from "next/link";
import ButtonSecondary from "../ui/button/ButtonSecondary";
export default function BannerLg() {
  return (
    <div>
      <div
        id="banner-large"
        className="mx-auto mt-20 flex w-4/5 flex-col items-center justify-center gap-10 rounded-xl px-3 py-12  md:px-20 lg:flex-row lg:gap-1"
      >
        {/* Image Container */}
        <div>
          <Image
            src="/assets/images/pages/home/desktop/image-speaker-zx9.png"
            width={250}
            height={300}
            alt="large-banner"
            className="mx-auto max-w-[180px] md:max-w-xl  lg:ml-12 lg:w-full"
          />
        </div>
        {/* Info Container  */}
        <div className="mx-auto flex flex-col items-center gap-6 text-light-100 md:w-3/4 lg:w-1/4 lg:items-start">
          <h1 className=" text-center text-5xl lg:text-start">ZX9 SPEAKER</h1>
          <p className="text-center text-sm leading-6 opacity-75 lg:text-start">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
        <Link href = "/product/6">
            <ButtonSecondary label= {"SEE PRODUCT"}/>
        </Link>
        </div>
      </div>
    </div>
  );
}
