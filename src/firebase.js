// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  Database,
  DatabaseReference,
  getDatabase,
  ref,
} from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuLYl6BxUkwJww8ojm14iZcjYmt42iEhU",
  authDomain: "shandor-project.firebaseapp.com",
  projectId: "shandor-project",
  storageBucket: "shandor-project.appspot.com",
  messagingSenderId: "727142526471",
  appId: "1:727142526471:web:ca380fb17129afaedf84a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const firestore = getFirestore(app);
const auth = getAuth(app);
const userFirebaseRef = (path) => ref(db, path);
export { app as FirebaseApp, db, userFirebaseRef, auth, firestore };
