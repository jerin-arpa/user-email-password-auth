// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEAfI1J6x3_cfNsmR7WDTp9OVdBFPLlHo",
    authDomain: "user-email-password-auth-10446.firebaseapp.com",
    projectId: "user-email-password-auth-10446",
    storageBucket: "user-email-password-auth-10446.appspot.com",
    messagingSenderId: "529429213669",
    appId: "1:529429213669:web:8e51d251d35480ccde7f0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;