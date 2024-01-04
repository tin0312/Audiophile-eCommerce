"use client"

import SupportNav from "@/app/components/shared/SupportNav"
import About from "@/app/components/shared/About"
import Accessories from "@/app/components/Product/Accessories"
import ProductDetails from "@/app/components/Product/ProductDetails"
import ProductGallery from "@/app/components/Product/ProductGallery"
import ProductHero from "@/app/components/Product/ProductHero"
import { useRouter, useParams } from "next/navigation"
import { useState, useEffect } from "react"
import getProduct from "@/lib/firebase/getDB/getProduct"
import { db } from "@/lib/firebase/firebaseConfig"
import Loader from "@/app/components/ui/navigation/Loader"
import { ProductTypes } from "@/types/global"

export default function ProductPage() {
    // get product data 
    const params = useParams()
    const { id } = params
    //save product id details data
    const [productDetails, setProductDetails] = useState<ProductTypes | null>(null)
    //get product details data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productDetails = await getProduct(db, id as string)
                setProductDetails(productDetails)
                console.log(productDetails)
            } catch (e) {
                console.log("Error fetching product", e)
            }
        }
        const fetchingDelay = setTimeout(() => {
            fetchData()

        }, 1000)
        return () => clearTimeout(fetchingDelay)
    }, [id,])
    const router = useRouter()
    return (
        <div className="my-40">
            <div className="w-4/5 mx-auto">
                <a href="#" onClick={() => router.back()}>
                    <p className="opacity-50">Go Back</p>
                </a>
                {productDetails ?
                    (<section className="my-52">
                        <ProductHero product={productDetails} />
                    </section>)
                    : <Loader />}
                <SupportNav />
                <About />
            </div>
        </div>
    )
}