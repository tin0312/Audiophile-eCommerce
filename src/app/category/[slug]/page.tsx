'use client'
import ProductCard from "@/app/components/Category/ProductCard"
import Loader from "../../components/ui/navigation/loader"
import SupportNav from "@/app/components/shared/SupportNav"
import About from "@/app/components/shared/About"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { ProductTypes } from "@/types/global"
import { db } from "@/lib/firebase/firebaseConfig"
import GetProductByCategory from "@/lib/firebase/getDB/GetProductByCategory"


export default function CategoryPage() {
    const params = useParams()
    const { slug } = params;
    const [productData, setProductData] = useState<ProductTypes[] | null>(null)

    // get product data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const product = await GetProductByCategory(db, slug)
                setProductData(product)
            } catch (error) {
                console.log("Error fetching data")
            }
        }
        const fetchingDelay = setTimeout(() => {
            fetchData()
        }, 1000)
        return () => clearTimeout(fetchingDelay)
    }, [slug])

    let productItem = null
    if (productData) {
        productItem = productData.map((product: ProductTypes, index: number) => (
            < ProductCard key={index} product={product} />
        ))
    }

    return (
        <div className="category-container">
            <div className="w-screen bg-dark-850 text-light-100 py-16 flex justify-center">
                <h2 className="uppercase text-xl font-bold">{slug}</h2>
            </div>
            <div>
                {/* Product Items section */}
                <section className="my-40">
                    {productData ? productItem : <Loader />}
                </section>
                <SupportNav />
                <About />
            </div>
        </div>
    )
}
