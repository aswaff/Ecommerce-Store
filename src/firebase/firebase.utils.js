import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBvNEGsVIIxvuFsUpSWxa7YrXqIjTp75Nk",
    authDomain: "ecomm-db-9b552.firebaseapp.com",
    databaseURL: "https://ecomm-db-9b552.firebaseio.com",
    projectId: "ecomm-db-9b552",
    storageBucket: "ecomm-db-9b552.appspot.com",
    messagingSenderId: "108161621684",
    appId: "1:108161621684:web:b45318ed962b47b9d9c1e1",
    measurementId: "G-SXZW16W984"
  }

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;