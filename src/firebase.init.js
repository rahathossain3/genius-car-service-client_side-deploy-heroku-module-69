// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrwLzFRTd3ifDw2ZyphhB1ZWLu6JhREq8",
    authDomain: "genius-car-services-75f99.firebaseapp.com",
    projectId: "genius-car-services-75f99",
    storageBucket: "genius-car-services-75f99.appspot.com",
    messagingSenderId: "984000951444",
    appId: "1:984000951444:web:c303fb7d3c3b2a581bb081"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;