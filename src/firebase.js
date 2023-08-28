import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1m_UF8iJm095oqCnqODbF-f03bUY-93o",
  authDomain: "netflix-59621.firebaseapp.com",
  databaseURL: "https://netflix-59621-default-rtdb.firebaseio.com",
  projectId: "netflix-59621",
  storageBucket: "netflix-59621.appspot.com",
  messagingSenderId: "440910242603",
  appId: "1:440910242603:web:8f0a152a4c70333ad6db6e",
  measurementId: "G-T1NJRF5RC1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
