// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwmxG00MytuFzXW4U7wBEsR92A_iJZK7o",
  authDomain: "cerevex.firebaseapp.com",
  projectId: "cerevex",
  storageBucket: "cerevex.firebasestorage.app",
  messagingSenderId: "362473150903",
  appId: "1:362473150903:web:e78ae20b726a88772e3032",
  measurementId: "G-205XJWY8FN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
