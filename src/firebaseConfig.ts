import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7WiLALWCcDJp6calM9qNzn0JjaDURsyg",
    authDomain: "userauthentication-c5e2b.firebaseapp.com",
    projectId: "userauthentication-c5e2b",
    storageBucket: "userauthentication-c5e2b.firebasestorage.app",
    messagingSenderId: "555256183423",
    appId: "1:555256183423:web:e2f6c310063fefaf129d4a"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
