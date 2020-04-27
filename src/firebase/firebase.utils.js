import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { fireEvent } from '@testing-library/react';

const config = {
    apiKey: "AIzaSyA_TUuSqWeaQvF7I_zmU8xH3Bm8K7Q70AY",
    authDomain: "crwn-db-70d69.firebaseapp.com",
    databaseURL: "https://crwn-db-70d69.firebaseio.com",
    projectId: "crwn-db-70d69",
    storageBucket: "crwn-db-70d69.appspot.com",
    messagingSenderId: "297319817630",
    appId: "1:297319817630:web:06abc721a14af6c0efb68f",
    measurementId: "G-2MMQT2ZF8Y"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


