// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app"; // this was the default boilerplate
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAT570QNLV20c7J5ZfOVpDhyOwgsODrrY",
  authDomain: "foodmem-8e2da.firebaseapp.com",
  databaseURL: "https://foodmem-8e2da.firebaseio.com",
  projectId: "foodmem-8e2da",
  storageBucket: "foodmem-8e2da.appspot.com",
  messagingSenderId: "42232940030",
  appId: "1:42232940030:web:f85a825d9ef53e7ddf2caf",
};

// Initialize Firebase

// default boilerplate code to delete
/*const app = initializeApp(firebaseConfig);*/
/*const auth = getAuth();*/

/*export { auth };*/

//let app;
//if (firebase.apps.length === 0) {
//app = firebase.initializeApp(firebaseConfig);
//} else {
//app = firebase.app();
//}

//const auth = firebase.auth();

//export { auth };

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
} else {
  Firebase = firebase.app();
}
export default Firebase;
