import  firebase from 'firebase/app';
import "firebase/auth";
import dotenv from 'dotenv';

dotenv.config();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyD9mxwstgsuaoL2esHBrU02vt7_VZMDxwo",
//     authDomain: "theengineeringsphere-cc0a0.firebaseapp.com",
//     projectId: "theengineeringsphere-cc0a0",
//     storageBucket: "theengineeringsphere-cc0a0.appspot.com",
//     messagingSenderId: "847302140548",
//     appId: "1:847302140548:web:26b17f599dbbc48ff498d1",
//     measurementId: "G-LJ47ZD6GY4"
//   };


  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDING_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {
      return auth.signInWithPopup(googleProvider).then((res) => {
        return res.user;
         
      }).catch((error) => {
        return error;
      })
    }

export {auth};