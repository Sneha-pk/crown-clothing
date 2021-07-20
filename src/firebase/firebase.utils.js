import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config= {
        apiKey: "AIzaSyBM1VQYnvAWXl7GVLMUw5eLwC8RZpAl4BE",
        authDomain: "crown-cloth-51da9.firebaseapp.com",
        projectId: "crown-cloth-51da9",
        storageBucket: "crown-cloth-51da9.appspot.com",
        messagingSenderId: "475089473863",
        appId: "1:475089473863:web:03f06a7a469e0b8d7c7c62",
        measurementId: "G-45GDWMT2Z4"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;