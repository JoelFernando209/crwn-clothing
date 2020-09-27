import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBj1dqaU24P1DBx6d7hWoRVEevmoLLjfh8",
  authDomain: "crwn-db-joel.firebaseapp.com",
  databaseURL: "https://crwn-db-joel.firebaseio.com",
  projectId: "crwn-db-joel",
  storageBucket: "crwn-db-joel.appspot.com",
  messagingSenderId: "961230458028",
  appId: "1:961230458028:web:c2465dd8d96d0ad0112309",
  measurementId: "G-CMPD6M9DH6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;