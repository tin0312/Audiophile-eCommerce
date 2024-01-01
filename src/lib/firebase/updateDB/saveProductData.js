import { productsData } from "../../../../data.js";
import { db } from "../firebaseConfig.js"
import {collection, addDoc } from "firebase/firestore"

const saveProductData = async () => {
    try{
       for(const product of productsData){
       await addDoc(collection(db, "products"), {
        ...product
       }) 
       } 
       console.log("Successfully saved data to Firebase!")
    } catch(error){
        console.log("Fail to save data to Firebase", error)
    }
}
saveProductData()