import { initializeApp, getApps } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTLPiJji6hXPy2bpmH9jNqJJMkGuUkDLk",
    authDomain: "connectsj-68124.firebaseapp.com",
    projectId: "connectsj-68124",
    storageBucket: "connectsj-68124.firebasestorage.app",
    messagingSenderId: "138081084881",
    appId: "1:138081084881:web:d66ba8b9fad596a5d0acf0",
    measurementId: "G-NK5QHWX80D"
  };
  

// Prevent re-initializing when hot-reloading
const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0];

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);