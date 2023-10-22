// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXpzC8IR_RgruefGYkm6TOoopNZ6iV6jI",
  authDomain: "realtor-clone-aca24.firebaseapp.com",
  projectId: "realtor-clone-aca24",
  storageBucket: "realtor-clone-aca24.appspot.com",
  messagingSenderId: "908456887424",
  appId: "1:908456887424:web:a01cffe3685f2c5e535265"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();