import { ProductTypes } from "@/types/global"
import { collection, getDoc, Firestore,doc} from "firebase/firestore"


export default async function GetProduct(db: Firestore, id: string){
     // take the first document in the query result
        const docSnapshot = await getDoc(doc(db, "products", id));

        // if the document exists, return its data, otherwise return null
        return docSnapshot.exists() ? docSnapshot.data() as ProductTypes : null;
} 

