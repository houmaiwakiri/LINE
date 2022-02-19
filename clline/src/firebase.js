import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCIbOWQ3dWf2JUpzTefR5XlvLZ3uuMn5JA",
    authDomain: "cl-line-e9fde.firebaseapp.com",
    projectId: "cl-line-e9fde",
    storageBucket: "cl-line-e9fde.appspot.com",
    messagingSenderId: "100461785498",
    appId: "1:100461785498:web:453c4e61fd3e80248b0a23"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db , auth };