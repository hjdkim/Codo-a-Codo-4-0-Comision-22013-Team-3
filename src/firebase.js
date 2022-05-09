// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDFOUdDIbbDGe-v6ex4WDcDg04nahUZys",
  authDomain: "crud-udemy-react-b7d88.firebaseapp.com",
  projectId: "crud-udemy-react-b7d88",
  storageBucket: "crud-udemy-react-b7d88.appspot.com",
  messagingSenderId: "1082860005295",
  appId: "1:1082860005295:web:51d6a1a6a5f023cc49715a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export {firebase};