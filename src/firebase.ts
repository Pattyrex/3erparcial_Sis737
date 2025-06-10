import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzBOXbzl-R3nUy8t1Bj7Kkspfa5ZYy9N8",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "prueba-7701a",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_SENDER_ID",
  appId: "1:538747266827:web:944783cb7d5a429c79e40e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);