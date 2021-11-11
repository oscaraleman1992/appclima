
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqGacRqxqbaudfdm1jqSKrpJzAAd7N3Fg",
  authDomain: "app-clima-d0891.firebaseapp.com",
  projectId: "app-clima-d0891",
  storageBucket: "app-clima-d0891.appspot.com",
  messagingSenderId: "721254514502",
  appId: "1:721254514502:web:4685b7c199a12686096f47",
  measurementId: "G-5XN2XLH1WD"
};

// Initialize Firebase
export const appFirebase = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
export { auth }