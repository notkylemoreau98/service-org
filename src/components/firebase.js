 import firebase from 'firebase';
	
	const firebaseConfig = {
    apiKey: "AIzaSyC06-ngrLoSkVWwdhUwTejBSycJKc3qH_g",
    authDomain: "service-org.firebaseapp.com",
    projectId: "service-org",
    storageBucket: "service-org.appspot.com",
    messagingSenderId: "4747313550",
    appId: "1:4747313550:web:67397b8f1f00b905e7e4df",
    measurementId: "G-8ZHTYF09L2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };