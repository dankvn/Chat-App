import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFnUM8eKs1Xm1kuKlmDNAPmvS76L6_-68",
  authDomain: "fir-de883.firebaseapp.com",
  projectId: "fir-de883",
  storageBucket: "fir-de883.appspot.com",
  messagingSenderId: "581904754187",
  appId: "1:581904754187:web:19ea4d81a223a7cdc3c90e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
