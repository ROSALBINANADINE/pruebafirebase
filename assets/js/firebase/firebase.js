// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getFirestore, collection, doc,  addDoc, getDoc, updateDoc, onSnapshot,deleteDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


//Funciones del CRUD
export const createTask = (title, description ) => addDoc (collection(db, "tasks"), {title, description});

export const getTask = id => getDoc(doc(db, "tasks", id));

export const onGetTask = (callback) => onSnapshot(collection(db, "tasks"),callback);

export const updateTask =(id, newFields) => updateDoc (doc(db, "tasks", id), newFields);

export const deleteTask = id => deleteDoc(doc(db,"tasks", id));

