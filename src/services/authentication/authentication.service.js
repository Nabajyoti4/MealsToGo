import { auth } from "firebase/auth";

export const loginRequest = (email, password) =>
  auth().signInWithEmailAndPassword(email, password);
