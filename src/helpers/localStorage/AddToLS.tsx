import { ProductTypes } from "@/types/global";

export default function AddToLS(product: ProductTypes){
    //declare essential product information to save in local storage
    const savedProductData = {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        quantity: product.quantity
    }

    let cart : ProductTypes[]
    const cartItem = localStorage.getItem("cart")
    if(cartItem){
        cart = JSON.parse(cartItem)
    } else {
        cart = []
    }

    const existingProduct = cart.find((item: ProductTypes) => item.id === savedProductData.id)

    if(existingProduct){
        product.quantity+=1
    } else{
        product.quantity = 1
        cart.push(savedProductData as ProductTypes)
    }
    localStorage.setItem("cart", JSON.stringify(cart))
}