// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0NekOP_2XhTycPX15U4CGBumTmexaFj0",
  authDomain: "my-projects-1136f.firebaseapp.com",
  projectId: "my-projects-1136f",
  storageBucket: "my-projects-1136f.firebasestorage.app",
  messagingSenderId: "16171582511",
  appId: "1:16171582511:web:39ce2c1f96b031e258b2da",
  measurementId: "G-E2XXWVK9DE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//our code
export const db = getFirestore(app);