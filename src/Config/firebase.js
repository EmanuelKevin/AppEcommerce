import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZiQnjfzLrYWAVZiAryLC6cfP3iRdU3bU",
  authDomain: "ecommerce---dr2023.firebaseapp.com",
  projectId: "ecommerce---dr2023",
  storageBucket: "ecommerce---dr2023.appspot.com",
  messagingSenderId: "268160054329",
  appId: "1:268160054329:web:a1a80b71109f77eafa89e8",
};

const app = firebase.initializeApp(firebaseConfig);

export default firebase;
