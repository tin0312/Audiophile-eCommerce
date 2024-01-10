/*This page is to display the large banner of the Home Page*/
import Image from "next/image";
import Link from "next/link";
import ButtonSecondary from "../ui/button/ButtonSecondary";
export default function BannerLg() {
  return (
    <div>
      <div
        id="banner-large"
        className="lg:flex-row md:px-20 lg:gap-1 mx-auto mt-20 flex w-4/5 flex-col items-center justify-center gap-10  rounded-xl px-3 py-12"
      >
        {/* Image Container */}
        <div>
          <Image
            src="/assets/images/pages/home/desktop/image-speaker-zx9.png"
            width={250}
            height={300}
            alt="large-banner"
            className="lg:w-full lg:ml-12  mx-auto max-w-xl"
          />
        </div>
        {/* Info Container  */}
        <div className="lg:w-1/4 md:w-3/4 lg:items-start mx-auto flex flex-col items-center gap-6 text-light-100">
          <h1 className=" lg:text-start text-center text-5xl">ZX9 SPEAKER</h1>
          <p className="lg:text-start text-center text-sm leading-6 opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href="/product/zx9-speakers">
            <ButtonSecondary label={"SEE PRODUCT"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
