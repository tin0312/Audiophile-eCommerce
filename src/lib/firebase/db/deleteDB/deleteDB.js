import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

// Example function for deleting data from Firestore
export const deleteData = async (collectionName, docId) => {
  try {
    await deleteDoc(doc(db, collectionName, docId));
    console.log("Data deleted successfully.");
  } catch (error) {
    console.error("Error deleting data:", error.message);
  }
};
