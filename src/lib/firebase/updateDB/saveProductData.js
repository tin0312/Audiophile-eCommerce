import { productsData } from "../../../../data.js";
import { db } from "../firebaseConfig.js"
import { doc, setDoc } from "firebase/firestore"

//add data with custom id

const saveProductData = async () => {
    try {
        for (const product of productsData) {
            const productId = String(product.id)
            const productRef = doc(db, "products", productId)
            await setDoc(productRef, {...product})
        }
        console.log("Successfully saved data to Firebase")
    } catch (error) {
        console.log("Error saving data", error)
    }
}

saveProductData()