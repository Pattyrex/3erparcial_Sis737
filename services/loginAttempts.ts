import { db } from './../src/firebase';
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function saveLoginAttempt(identifier: string, success: boolean, password: string) {
  try {
    await addDoc(collection(db, "loginAttempts"), {
      identifier,
      password,
      success,
      timestamp: Timestamp.now(),
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error guardando intento de login:", error.message);
    } else {
      console.error("Error guardando intento de login:", error);
    }
  }
}
