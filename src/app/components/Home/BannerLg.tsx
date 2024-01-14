/*This page is to display the large banner of the Home Page*/
import Image from "next/image";
import Link from "next/link";
import ButtonSecondary from "../ui/button/ButtonSecondary";
export default function BannerLg() {
  return (
    <div >
      <div id = "banner-large" className="w-4/5 mx-auto flex items-center justify-center gap-72 pt-12 mt-20">
        {/* Image Container */}
        <div>
            <Image
                src = "/assets/images/pages/home/desktop/image-speaker-zx9.png"
                width={250}
                height={300} 
                alt = "large-banner"/>
        </div>
        {/* Info Container  */}
        <div className="text-light-100 flex flex-col gap-6 w-1/4">
          <h1 className=" text-5xl">ZX9 SPEAKER</h1>
          <p className="opacity-75 leading-6">
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
