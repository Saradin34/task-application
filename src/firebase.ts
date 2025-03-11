import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBz7b0SFlBUMCz8vMzO9fdJ3jfjIsrQSGU",
    authDomain: "task-application-23816.firebaseapp.com",
    projectId: "task-application-23816",
    storageBucket: "task-application-23816.appspot.com",
    messagingSenderId: "843611450957",
    appId: "1:843611450957:web:bdf2acf7ded3de5edb7604",
    measurementId: "G-4EWTDSBPPG",
    databaseURL: "https://task-application-23816-default-rtdb.firebaseio.com/", // Убедитесь, что URL правильный
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const database = getDatabase(app);