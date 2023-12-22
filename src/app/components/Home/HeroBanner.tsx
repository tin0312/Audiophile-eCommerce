/*This is to display the hero banner under navigation bar on Home Page*/
import Link from "next/link";
import ButtonPrimary from "../ui/button/ButtonPrimary";

export default function HeroBanner() {
  return (
    /*Hero Section*/
    <section id = "hero" className="mb-32 py-20 text-light-100">
      {/* Info Container */}
      <div className="mx-auto flex w-4/5 flex-col gap-6">
        <div className="flex flex-col gap-6 w-1/3">
          <p className="opacity-50 tracking-widest">NEW PRODUCT</p>
          <h1 className="text-5xl font-bold">XX99 MARK II HEADPHONES</h1>
          <p className="opacity-50 leading-8">
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
