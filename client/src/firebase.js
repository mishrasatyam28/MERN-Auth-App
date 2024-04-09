// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-de65a.firebaseapp.com",
  projectId: "mern-auth-de65a",
  storageBucket: "mern-auth-de65a.appspot.com",
  messagingSenderId: "362868384491",
  appId: "1:362868384491:web:0a50ddf690ac628aae54ae",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
