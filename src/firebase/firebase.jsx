import React from "react";
import firebase from 'firebase/compat/app';

const getFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBWEtUZy2xQ0-ve6dqFEHtBp7ix-xWy0Cg",
    authDomain: "swell-moter-cycle.firebaseapp.com",
    projectId: "swell-moter-cycle",
    storageBucket: "swell-moter-cycle.appspot.com",
    messagingSenderId: "103437034913",
    appId: "1:103437034913:web:f36beab947d4ced12497e0",
    measurementId: "G-25C96ZEJTV"
  };
  firebase.initializeApp(firebaseConfig);
  return firebase;
};

export default getFirebase;
