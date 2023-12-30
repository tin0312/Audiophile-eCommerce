import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAniBHOeGiR8VkXHKg2_hGfeEr5f-PIREo",
  authDomain: "audiophile-ecommerce-1dc9d.firebaseapp.com",
  projectId: "audiophile-ecommerce-1dc9d",
  storageBucket: "audiophile-ecommerce-1dc9d.appspot.com",
  messagingSenderId: "210358621851",
  appId: "1:210358621851:web:ed19038f854f4167d0183e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
