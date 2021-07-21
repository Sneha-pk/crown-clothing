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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
  //   console.log(firestore.doc(`users/12345gfgd`));
  // }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      console.log('inside', displayName, email, createdAt);
      try
      { 
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
  
      } catch(error) {
        console.log('error creating data', error.message);
      }
    }


  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;