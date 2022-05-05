// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAlXxp5Yu09Uck45JOJnNqzHCW2xnj9FQ",
  authDomain: "instagram-af4c5.firebaseapp.com",
  projectId: "instagram-af4c5",
  storageBucket: "instagram-af4c5.appspot.com",
  messagingSenderId: "1041673640443",
  appId: "1:1041673640443:web:772e88ad0d790d66e5935e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export {app,db,storage}