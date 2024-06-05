// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKoomYOytnZi0Fx5VsSLeUa85-l1yGQeA",
  authDomain: "rent-residential-apartment.firebaseapp.com",
  projectId: "rent-residential-apartment",
  storageBucket: "rent-residential-apartment.appspot.com",
  messagingSenderId: "193619398798",
  appId: "1:193619398798:web:aaf7ba7ecb0251091639df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
