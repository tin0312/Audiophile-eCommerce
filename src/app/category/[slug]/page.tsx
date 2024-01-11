"use client";
import ProductCard from "@/app/components/Category/ProductCard";
import Loader from "@/app/components/ui/navigation/Loader";
import SupportNav from "@/app/components/shared/SupportNav";
import About from "@/app/components/shared/About";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ProductTypes } from "@/types/global";
import { db } from "@/lib/firebase/firebaseConfig";
import GetProductByCategory from "@/lib/firebase/getDB/GetProductByCategory";

export default function CategoryPage() {
  const { slug } = useParams();
  const [productData, setProductData] = useState<ProductTypes[] | null>(null);

  // get product data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await GetProductByCategory(db, slug as string);
        setProductData(product);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    const fetchingDelay = setTimeout(() => {
      fetchData();
    }, 1000);
    return () => clearTimeout(fetchingDelay);
  }, [slug]);

  let productItem = null;
  if (productData) {
    productItem = productData.map((product: ProductTypes, index: number) => (
      <ProductCard key={index} product={product} />
    ));
  }

  return (
    <div className="category-container">
      <div className="flex w-full justify-center bg-dark-850 py-10 text-light-100 md:py-16">
        <h2 className="text-xl font-bold uppercase">{slug}</h2>
      </div>
      <div>
        {/* Product Items section */}
        <section className="mb-44 mt-20">
          {productData ? productItem : <Loader />}
        </section>
        <SupportNav />
        <About />
      </div>
    </div>
  );
}
