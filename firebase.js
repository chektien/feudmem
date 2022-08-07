// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app"; // this was the default boilerplate
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

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
// TODO maybe remove app var and just init?
const app = initializeApp(firebaseConfig);

// TODO delete when no longer needed
//let Firebase;

//if (firebase.apps.length === 0) {
//Firebase = firebase.initializeApp(firebaseConfig);
//} else {
////Firebase = firebase.initializeApp(firebaseConfig);
//Firebase = firebase.app();
//}
//export default Firebase;

//const auth = Firebase.auth();
//const db = Firebase.firestore();

// TODO remove the export when all things can be contained in here
// NOTE that you can also just export the whole auth and db
const auth = getAuth();
const db = getFirestore();

/**
 * Add new memory.
 */
export const createMem = () => {
  console.log("creating a memory...");
  const memoryRef = collection(db, "memories");
  return addDoc(memoryRef, { title: "testing title mme", date: "213" });
};

/**
 * Sign-up.
 */
export const register = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log("Registered user ", user.email);
    })
    .catch((error) => alert(error.message));
};

/**
 * Login.
 */
export const login = (email, password) => {
  //console.log("In Login email:", email, "pw:", password);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log("Logged in ", user.email, "with id", user.uid);
    })
    .catch((error) => alert(error.message));
};

/**
 * Logout.
 */
export const logout = (callback) => {
  signOut(auth)
    .then(() => {
      console.log("logged out...");
      callback();
    })
    .catch((error) => alert(error.message));
};

/**
 * Get login status.
 * - attach an observer to onAuthStateChanged that will handle login when changed
 */
export const loginStatus = (observer) => {
  onAuthStateChanged(auth, observer);
};

/**
 * Get current user.
 */
export const getCurrentUser = auth.currentUser;

/**
 * Testing alternative function declaration
 */
export function login2(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log("Logged in alternatively with uid=", user.uid);
    })
    .catch((err) => alert("homg ", err.message));
}
