import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJfGK3eVoxHFwXnDfoxVxB3T3j6JnXFkk",
  authDomain: "ecom-app-9d08e.firebaseapp.com",
  projectId: "ecom-app-9d08e",
  storageBucket: "ecom-app-9d08e.appspot.com",
  messagingSenderId: "384581713217",
  appId: "1:384581713217:web:1b8867daa95132429435c0",
  measurementId: "G-FNTYEXNMS5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

