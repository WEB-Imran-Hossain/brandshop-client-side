// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCOCuGffClUCoFaOcKa1PuyQW7BVyaCvE",
    authDomain: "beauty-shop-client.firebaseapp.com",
    projectId: "beauty-shop-client",
    storageBucket: "beauty-shop-client.appspot.com",
    messagingSenderId: "1075434309666",
    appId: "1:1075434309666:web:e98e3f0b30617e012c227b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);