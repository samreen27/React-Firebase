// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzxrFJMGY8zC16zclX-t29aQEjcKoRM_c",
  authDomain: "fir-project-66c9d.firebaseapp.com",
  projectId: "fir-project-66c9d",
  storageBucket: "fir-project-66c9d.appspot.com",
  messagingSenderId: "376862832977",
  appId: "1:376862832977:web:d1f54be3654cf92451fb70",
  measurementId: "G-X6ZTT9VNDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)