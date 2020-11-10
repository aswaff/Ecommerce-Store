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

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;