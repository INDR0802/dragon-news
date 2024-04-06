// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnB_Vg5YwxIbf-Pv27Ol17hrhlst8GYOk",
    authDomain: "dagon-news-92ff2.firebaseapp.com",
    projectId: "dagon-news-92ff2",
    storageBucket: "dagon-news-92ff2.appspot.com",
    messagingSenderId: "911543811680",
    appId: "1:911543811680:web:bc57b3932a1abcb5f20d05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);