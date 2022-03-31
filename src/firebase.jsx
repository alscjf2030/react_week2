// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC67smNTXf-UbSCAryQS5SOmLD3TYsMeGc",
    authDomain: "sparta-react-basic-48a09.firebaseapp.com",
    projectId: "sparta-react-basic-48a09",
    storageBucket: "sparta-react-basic-48a09.appspot.com",
    messagingSenderId: "1054054385380",
    appId: "1:1054054385380:web:b7a10a03b2b027e6934ef1",
    measurementId: "G-DR4JLSM1QX"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();