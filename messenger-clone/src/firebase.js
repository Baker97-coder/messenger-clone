import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBZeK5UlFu5i3RV0P5Qa-qWs4DX2qrypHI",
    authDomain: "messenger-clone-19d88.firebaseapp.com",
    databaseURL: "https://messenger-clone-19d88.firebaseio.com",
    projectId: "messenger-clone-19d88",
    storageBucket: "messenger-clone-19d88.appspot.com",
    messagingSenderId: "1037583682573",
    appId: "1:1037583682573:web:a33b4c388879c2b2f49944",
    measurementId: "G-JSS6NW6P5X"
});

const db =firebaseApp.firestore();

export default db;