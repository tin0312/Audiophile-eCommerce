import Link from "next/link";
import ButtonSecondary from "../ui/button/ButtonSecondary";

export default function BannerSplit() {
  return (
    <div>
      <div
        id="banner-small"
        className="lg:pt-28 lg:pl-24 mx-auto my-10 min-h-[320px] w-4/5 rounded-xl pl-10  pt-20"
      >
        <div className="flex flex-col items-start justify-center gap-4 ">
          <h3 className="text-3xl font-bold tracking-wide">ZX7 SPEAKER</h3>
          <Link href="/product/6">
            <ButtonSecondary label="SEE PRODUCT" />
          </Link>
        </div>
      </div>
    </div>
  );
}
