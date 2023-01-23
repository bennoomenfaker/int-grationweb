import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9wcYsP32PehrMZmDfojWaF6NUJCeRJEU",
  authDomain: "netflix-1ee09.firebaseapp.com",
  projectId: "netflix-1ee09",
  storageBucket: "netflix-1ee09.appspot.com",
  messagingSenderId: "65317018635",
  appId: "1:65317018635:web:9522ba7326b9e365b8fb0e"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
