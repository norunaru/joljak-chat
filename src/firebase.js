// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtRS4mzkYBFUr4ZPbwgh2QQkZ4F1jXe_I",
  authDomain: "superchat-55049.firebaseapp.com",
  projectId: "superchat-55049",
  storageBucket: "superchat-55049.appspot.com",
  messagingSenderId: "220351530492",
  appId: "1:220351530492:web:90d42fbb646dcfb26bde79",
  measurementId: "G-V4WQDXB5J4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
