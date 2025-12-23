import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7VXzROw18xYdifTWwq7DGXIqtjfJu8nE",
  authDomain: "lalo-37555.firebaseapp.com",
  projectId: "lalo-37555",
  storageBucket: "lalo-37555.firebasestorage.app",
  messagingSenderId: "538252267736",
  appId: "1:538252267736:web:d0b630c4fa4f90028d47ad",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
