/*This is to display the hero banner under navigation bar on Home Page*/
import Link from "next/link";
import ButtonPrimary from "../ui/button/ButtonPrimary";

export default function HeroBanner() {
  return (
    /*Hero Section*/

    <section id="hero" className="mb-32 py-28 text-light-100  md:py-20">
      {/* Info Container */}
      <div className="mx-auto  flex w-4/5 flex-col items-center gap-6  lg:items-start">
        <div className="flex flex-col items-center gap-6 md:w-3/4 lg:w-1/3 lg:items-start ">
          <p className="tracking-widest opacity-50">NEW PRODUCT</p>
          <h1 className="text-center text-4xl   font-bold tracking-wider md:text-6xl lg:text-left">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-center text-base opacity-50 lg:text-left lg:leading-8">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
        <Link href="/product/4">
          <ButtonPrimary type={"button"} label={"SEE PRODUCT"} style={""} />
        </Link>
      </div>
    </section>
  );
}
