'use client'
import ProductCard from "@/app/components/Category/ProductCard"
import SupportNav from "@/app/components/shared/SupportNav"
import About from "@/app/components/shared/About"

export default function CategoryPage(){
    return (
        <div className = "category-container">
            <h2>Category Name</h2>
            <ProductCard />
            <SupportNav />
            <About />
        </div>
    )
}
