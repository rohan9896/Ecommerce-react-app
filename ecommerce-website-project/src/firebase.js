import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCs2A-n08cS7skFZz3nSVQM2d5jOtOJx5k",
  authDomain: "ecommerce-website-projec-2a56d.firebaseapp.com",
  projectId: "ecommerce-website-projec-2a56d",
  storageBucket: "ecommerce-website-projec-2a56d.appspot.com",
  messagingSenderId: "1017214674304",
  appId: "1:1017214674304:web:ed7c8be98b4e18da05cd65",
  measurementId: "G-BV8BKV358R",
});

const auth = firebase.auth();

export { auth };
