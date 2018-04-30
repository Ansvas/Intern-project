import firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBYLPFBBufhhgjYr9sTmSk-TEGuM8zolZk",
    authDomain: "react-intern.firebaseapp.com",
    databaseURL: "https://react-intern.firebaseio.com",
    projectId: "react-intern",
    storageBucket: "react-intern.appspot.com",
    messagingSenderId: "563684667855"
  };
  firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;