//Part 1
import firebase from "firebase";

//Part 2

const firebaseConfig = {
  apiKey: "AIzaSyD6l60g-GpHaNjqbwHRhqIgdpovO-9h35A",
  authDomain: "slack-clone-challenge-data.firebaseapp.com",
  projectId: "slack-clone-challenge-data",
  storageBucket: "slack-clone-challenge-data.appspot.com",
  messagingSenderId: "684919076491",
  appId: "1:684919076491:web:eac42b8b1cb1b91558468e",
};

//part 3
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
