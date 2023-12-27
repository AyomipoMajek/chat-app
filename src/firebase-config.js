// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHlsSjQQxRaPG0zElKEf2f1NmXqgf-dOc",
  authDomain: "heychat-38c8e.firebaseapp.com",
  projectId: "heychat-38c8e",
  storageBucket: "heychat-38c8e.appspot.com",
  messagingSenderId: "599580815044",
  appId: "1:599580815044:web:32d25dbb9458f725b92391"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);