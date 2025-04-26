import { initializeApp, getApps } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "Hi There",
  authDomain: "project-1-1ce57.firebaseapp.com",
  databaseURL: "https://project-1-1ce57.firebaseio.com",
  projectId: "project-1-1ce57",
  storageBucket: "project-1-1ce57.firebasestorage.app",
  messagingSenderId: "691781700477",
  appId: "1:691781700477:web:69360e48a1f18ce5ec1a14"
};

// Prevent re-initializing when hot-reloading
const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0];

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);