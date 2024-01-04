import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCpMflKopKorVDt8ypN5YWS0OfwRYNZ-VA",
  authDomain: "audiophile-eb316.firebaseapp.com",
  databaseURL: "https://audiophile-eb316-default-rtdb.firebaseio.com",
  projectId: "audiophile-eb316",
  storageBucket: "audiophile-eb316.appspot.com",
  messagingSenderId: "669862164062",
  appId: "1:669862164062:web:35c868fd0a4b17995626cf",
  measurementId: "G-1KHE9F9WS6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)