// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsZzvZmgWWpbQZXUyljMswh5ck6E3Yo_4",
  authDomain: "react-learning-bbc2f.firebaseapp.com",
  projectId: "react-learning-bbc2f",
  storageBucket: "react-learning-bbc2f.appspot.com",
  messagingSenderId: "609529579186",
  appId: "1:609529579186:web:4c27189af77d8e36a9ebab"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);