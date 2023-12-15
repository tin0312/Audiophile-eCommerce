import HeroBanner from "./components/Home/HeroBanner"
import SupportNav from "./components/Category/ProductCard"
import BannerLg from "./components/Home/BannerLg"
import BannerSm from "./components/Home/BannerSm"
import BannerSplit from "./components/Home/BannerSplit"

export default function Home() {
  return (
    <div>
        <HeroBanner/>
        <SupportNav />
        <section>
            <BannerLg />
            <BannerSm />
            <BannerSplit />
        </section>
    </div>
  )
   
}
