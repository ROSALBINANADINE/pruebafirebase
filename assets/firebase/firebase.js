// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsQFI1TUI3pNcqCXvP-ibrQUR_C8Kjdj0",
  authDomain: "prueba-firebase-e5155.firebaseapp.com",
  projectId: "prueba-firebase-e5155",
  storageBucket: "prueba-firebase-e5155.appspot.com",
  messagingSenderId: "647374964992",
  appId: "1:647374964992:web:36315903e8678f4afd4be5",
  measurementId: "G-1TCND114F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);