/*This is to display the hero banner under navigation bar on Home Page*/
import Link from "next/link";
import ButtonPrimary from "../ui/button/ButtonPrimary";

export default function HeroBanner() {
  return (
    /*Hero Section*/

    <section id="hero" className="mb-32 py-20  text-light-100">
      {/* Info Container */}
      <div className="lg:items-start  mx-auto flex w-4/5 flex-col items-center  gap-6">
        <div className="lg:w-1/3 md:w-3/4 lg:items-start flex flex-col items-center gap-6 ">
          <p className="tracking-widest opacity-50">NEW PRODUCT</p>
          <h1 className="lg:text-left md:text-6xl   text-center text-4xl font-bold tracking-wider">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="lg:text-left lg:leading-8 text-center text-base opacity-50">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
        <Link href="/product/xx99-mark-two-headphones">
          <ButtonPrimary type={"button"} label={"SEE PRODUCT"} style={""} />
        </Link>
      </div>
    </section>
  );
}
