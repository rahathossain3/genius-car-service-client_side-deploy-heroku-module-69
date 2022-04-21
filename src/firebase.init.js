// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

    /* 
    //protected code
    .env.local
    
    REACT_APP_apiKey=AIzaSyBrwLzFRTd3ifDw2ZyphhB1ZWLu6JhREq8
    REACT_APP_authDomain=genius-car-services-75f99.firebaseapp.com
    REACT_APP_projectId=genius-car-services-75f99"
    REACT_APP_storageBucket=genius-car-services-75f99.appspot.com
    REACT_APP_messagingSenderId=984000951444
    REACT_APP_appId=1:984000951444:web:c303fb7d3c3b2a581bb081
    
    
    
    */



};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;