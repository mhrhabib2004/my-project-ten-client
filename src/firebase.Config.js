// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeRW6WQPVOAqaEIIU-V0t4Dx07c-k6BI4",
  authDomain: "assainment-ten-tourism.firebaseapp.com",
  projectId: "assainment-ten-tourism",
  storageBucket: "assainment-ten-tourism.appspot.com",
  messagingSenderId: "238974508172",
  appId: "1:238974508172:web:411b07ab29ddf30f522fa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;