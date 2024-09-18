// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_DJ31W1pltuPZnktbrrRK8NsYGnfd6DI",
  authDomain: "todo-app-666ec.firebaseapp.com",
  projectId: "todo-app-666ec",
  storageBucket: "todo-app-666ec.appspot.com",
  messagingSenderId: "504665750147",
  appId: "1:504665750147:web:13ef32c9d63483bb4cf9b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

