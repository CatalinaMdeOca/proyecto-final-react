// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEY1QuSNGa_-drMHSGCMdh1_ZXb5j7x3I",
  authDomain: "ecommerce-coder-95c19.firebaseapp.com",
  projectId: "ecommerce-coder-95c19",
  storageBucket: "ecommerce-coder-95c19.appspot.com",
  messagingSenderId: "227132471455",
  appId: "1:227132471455:web:9486a50ee3407d7e85caaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);