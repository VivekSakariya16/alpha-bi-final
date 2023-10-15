// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMoDbPc9cgOWNbNUbPh9WgDyArzszyHtc",
  authDomain: "giphy-search-d4fef.firebaseapp.com",
  projectId: "giphy-search-d4fef",
  storageBucket: "giphy-search-d4fef.appspot.com",
  messagingSenderId: "68176096318",
  appId: "1:68176096318:web:360bf4132d8f60324df56f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};