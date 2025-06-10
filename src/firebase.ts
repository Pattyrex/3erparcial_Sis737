import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzBOXbzl-R3nUy8t1Bj7Kkspfa5ZYy9N8",
  authDomain: "prueba-7701a.firebaseapp.com",
  projectId: "prueba-7701a",
  storageBucket: "prueba-7701a.firebasestorage.app",
  messagingSenderId: "538747266827",
  appId: "1:538747266827:web:944783cb7d5a429c79e40e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);