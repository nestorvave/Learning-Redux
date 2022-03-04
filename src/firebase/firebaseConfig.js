import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAbUVsCfbNAjVrHRVIBsfWORDT7cOYvD0s",
    authDomain: "react-app-journal-84b4d.firebaseapp.com",
    projectId: "react-app-journal-84b4d",
    storageBucket: "react-app-journal-84b4d.appspot.com",
    messagingSenderId: "475403584521",
    appId: "1:475403584521:web:cd1208447a9f26f992a4d8"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//database
const db = firebase.firestore()
//fuction to work with google signin
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}