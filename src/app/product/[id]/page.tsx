/*This page is to display the product detail for each product id*/ 
import Accessories from "@/app/components/Product/Accessories"
import ProductDetails from "@/app/components/Product/ProductDetails"
import ProductGallery from "@/app/components/Product/ProductGallery"
import ProductHero from "@/app/components/Product/ProductHero"

export default function ProductPage(){
    return (
        <div className="">
            <h1>Product Page</h1>
            <div>
                <ProductHero />
                <ProductDetails />
                <Accessories />
                <ProductGallery/>

            </div>
        </div>
    )
}