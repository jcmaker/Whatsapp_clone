import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiGpCyH-u61KRAwKRpszintBBkIkryCss",
  authDomain: "whatsappclone0627.firebaseapp.com",
  projectId: "whatsappclone0627",
  storageBucket: "whatsappclone0627.appspot.com",
  messagingSenderId: "450697105897",
  appId: "1:450697105897:web:aa936498aba811dadc3b78",
  measurementId: "G-5YVDJ9722V",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
