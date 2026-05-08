import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDultie469Qm2tiMmJIKxnL1UaBs4CmzBQ",
  authDomain: "sports-fit-zone.firebaseapp.com",
  projectId: "sports-fit-zone",
  storageBucket: "sports-fit-zone.firebasestorage.app",
  messagingSenderId: "679875456871",
  appId: "1:679875456871:web:1507ddc73009cc53ec89c2",
  measurementId: "G-5QE98D2M4D"
};

const app = initializeApp(firebaseConfig);

export default app;
