//Part 1
import firebase from "firebase";
require("dotenv").config();
//Part 2

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "slack-clone-challenge-data.firebaseapp.com",
  projectId: "slack-clone-challenge-data",
  storageBucket: "slack-clone-challenge-data.appspot.com",
  messagingSenderId: "684919076491",
  appId: process.env.REACT_APP_APP_ID,
};

//part 3
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
