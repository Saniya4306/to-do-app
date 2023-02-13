// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAz3Y8c51A7BqiOy9UtKMIqEdKPB90hug",
  authDomain: "fir-auth-11-1be4f.firebaseapp.com",
  databaseURL: "https://fir-auth-11-1be4f-default-rtdb.firebaseio.com",
  projectId: "fir-auth-11-1be4f",
  storageBucket: "fir-auth-11-1be4f.appspot.com",
  messagingSenderId: "877771424589",
  appId: "1:877771424589:web:9cc537ad7fe64ee151ed04",
  measurementId: "G-R5PW00PJHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};
