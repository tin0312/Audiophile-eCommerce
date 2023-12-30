import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

// Example function for updating data in Firestore
export const updateData = async (collectionName, docId, newData) => {
  try {
    const postRef = doc(db, collectionName, docId);

    await updateDoc(postRef, {
      name: newData,
    });
    console.log("Data updated successfully.");
  } catch (error) {
    console.error("Error updating data:", error.message);
  }
};
