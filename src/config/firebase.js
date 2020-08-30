import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCby2T6F1EnDXUvJB2XwddSjefr0nowj-w",
    authDomain: "megbook.firebaseapp.com",
    databaseURL: "https://megbook.firebaseio.com",
    projectId: "megbook",
    storageBucket: "megbook.appspot.com",
    messagingSenderId: "211009307425",
    appId: "1:211009307425:web:7b61cbcafe6d2bd5adb460",
    measurementId: "G-NJ2BFTP8XD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;