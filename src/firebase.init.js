// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIHv41qMvr9YjFgmC9vi_xKwjWOSM5uq0",
  authDomain: "jerins-parlour-800ce.firebaseapp.com",
  projectId: "jerins-parlour-800ce",
  storageBucket: "jerins-parlour-800ce.appspot.com",
  messagingSenderId: "673207812718",
  appId: "1:673207812718:web:f420edea191b9efe315c7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);