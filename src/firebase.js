import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBM1NOBmcAo8-RkfRdK2gj2ZkhJc6Bxbto",
  authDomain: "tasksprint-a56f5.firebaseapp.com",
  projectId: "tasksprint-a56f5",
  storageBucket: "tasksprint-a56f5.firebasestorage.app",
  messagingSenderId: "829756637788",
  appId: "1:829756637788:web:3eb8dee7c8dc4b562e1c99",
  measurementId: "G-RXPYRLFK09",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
