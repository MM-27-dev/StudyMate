// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKUOZ9ilxoW1XLQYKakMbv1N-d6Pa4M0g",
  authDomain: "studyai-da756.firebaseapp.com",
  projectId: "studyai-da756",
  storageBucket: "studyai-da756.firebasestorage.app",
  messagingSenderId: "941774164099",
  appId: "1:941774164099:web:cf5a24fba39026f8544bb6",
  measurementId: "G-FSXGN8R193",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();
