// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfY0Q-8wxzeaGhvuS3VfXVsmh7Y-6oj4E",
  authDomain: "gdsc-bf5a4.firebaseapp.com",
  projectId: "gdsc-bf5a4",
  storageBucket: "gdsc-bf5a4.appspot.com",
  messagingSenderId: "589777912930",
  appId: "1:589777912930:web:5e990eb002378c450bfd3b",
  measurementId: "G-WBWX9EKPRC",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
