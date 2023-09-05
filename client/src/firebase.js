import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAokaANquIPwlghs2_PuOrUh8oxQFHJ5Y4",
  authDomain: "vyavhar-10c61.firebaseapp.com",
  projectId: "vyavhar-10c61",
  storageBucket: "vyavhar-10c61.appspot.com",
  messagingSenderId: "235683687755",
  appId: "1:235683687755:web:76da22b728be6e48e28cce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();
export const db = getFirestore(app);