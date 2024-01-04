import { ProductTypes } from "@/types/global"
import {collection, getDocs, where, query, Firestore} from "firebase/firestore"


export default async function GetProductByCategory(db: Firestore, category: string){
        //get data from database based on category recieved
        const q = query(collection(db, "products"), where("category", "==", category)) 
        //get a snapshot of the data
        const querySnapshot = await getDocs(q)
        const products: ProductTypes[] = []
        //loop through the snapshot and push each product into the products array

            querySnapshot.forEach((doc) => {
                products.push(doc.data() as ProductTypes)
            })
        
        return products
}
/*

click on the navigation => /category/slug
const productData = [
{},
{},
{}

]
go over each item object with the matching slug and save them in an array 

*/ 

