// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-w0_kJ5vdHrqG1TAlLxRaU_ns1X4tW3k",
  authDomain: "mydrive-fddc9.firebaseapp.com",
  projectId: "mydrive-fddc9",
  storageBucket: "mydrive-fddc9.appspot.com",
  messagingSenderId: "962851586497",
  appId: "1:962851586497:web:240482700a5707ee6a2f40",
  measurementId: "G-NHX9S5KB0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);