import { ProductTypes } from "@/types/global";

export default function RemoveFromLS(product: ProductTypes){
    const cart = localStorage.getItem("cart")

    if(cart){
        const cartItems: ProductTypes[] = JSON.parse(cart)
        
        const existingProduct = cartItems.find((item: ProductTypes) => item.id === product.id)

        if(!existingProduct){
            throw new Error("Item does not exist!")
        }

        if(existingProduct.quantity > 1){
            const updateExistingProduct = {...existingProduct, quantity: existingProduct.quantity - 1}
            const updateCart = cartItems.map((product: ProductTypes) => product.id === updateExistingProduct.id ? updateExistingProduct : product)
            localStorage.setItem("cart", JSON.stringify(updateCart))
        } else if (existingProduct.quantity === 1){
            const updateCart = cartItems.filter((product: ProductTypes) => product.id !== existingProduct.id)
            localStorage.setItem("cart", JSON.stringify(updateCart))
        }
    }
}