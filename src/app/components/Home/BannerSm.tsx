import Link from "next/link"
import ButtonSecondary from "../ui/button/ButtonSecondary"

export default function BannerSplit(){
    return (
        <div>
            <div id = "banner-small" className="w-4/5 mx-auto my-20 py-32 pl-12">
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-xl tracking-wide">ZX7 SPEAKER</h3>
                <Link href = "/product/zx7-speaker">
                    <ButtonSecondary label = "SEE PRODUCT"/ >
                </Link>
            </div>
            </div>
        </div>
    )
}