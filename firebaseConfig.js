import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqYwZBV2YamVDUXHm8hfjOvpyObrow7w4",
  authDomain: "nutriphi-4a526.firebaseapp.com",
  projectId: "nutriphi-4a526",
  storageBucket: "nutriphi-4a526.appspot.com",
  messagingSenderId: "1080268547965",
  appId: "1:1080268547965:web:b998317d618a9ae3314e14",
  measurementId: "G-FVBWKC6PZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db};