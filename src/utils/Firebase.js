import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvx5Qk1Vyo4g18zfmbXFpfAB-OL99pa24",
  authDomain: "mulika-demo.firebaseapp.com",
  projectId: "mulika-demo",
  storageBucket: "mulika-demo.appspot.com",
  messagingSenderId: "822071882594",
  appId: "1:822071882594:web:e3459586727b22564b723b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const firebaseTimeStamp = Timestamp;
const storage = getStorage(app);

export { app, db, firebaseTimeStamp, storage };
