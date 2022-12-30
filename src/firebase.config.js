import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkapQSji2EgjCBZ_b9lSe0i11cDpRcmVk",
  authDomain: "house-marketplace-app-d635c.firebaseapp.com",
  projectId: "house-marketplace-app-d635c",
  storageBucket: "house-marketplace-app-d635c.appspot.com",
  messagingSenderId: "332524393544",
  appId: "1:332524393544:web:5efae203700a07f7b2f47d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()