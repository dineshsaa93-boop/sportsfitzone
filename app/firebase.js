import { initializeApp } from "firebase/app";

import {
  getAuth
} from "firebase/auth";

import {
  getFirestore
} from "firebase/firestore";

import {
  getStorage
} from "firebase/storage";

const firebaseConfig = {

  apiKey:
    "AIzaSyDultie469Qm2tiMmJIKxnL1UaBs4CmzBQ",

  authDomain:
    "sports-fit-zone.firebaseapp.com",

  projectId:
    "sports-fit-zone",

  storageBucket:
    "sports-fit-zone.firebasestorage.app",

  messagingSenderId:
    "679875456871",

  appId:
    "1:679875456871:web:1507ddc73009cc53ec89c2",

  measurementId:
    "G-5QE98D2M4D"

};

const app =
  initializeApp(firebaseConfig);

export const auth =
  getAuth(app);

export const db =
  getFirestore(app);

export const storage =
  getStorage(app);

export default app;
