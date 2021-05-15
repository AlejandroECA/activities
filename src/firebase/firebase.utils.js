import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBaBZvX3X726iFBTUDJNrYCmvUGExwoqNI",
  authDomain: "activities-17a98.firebaseapp.com",
  projectId: "activities-17a98",
  storageBucket: "activities-17a98.appspot.com",
  messagingSenderId: "93499399239",
  appId: "1:93499399239:web:c3219e86b7fadfe08f2562",
  measurementId: "G-M7WS6CFRHN",
};

initFirebase();

export default firebase;

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const db = firebase.firestore();


function initFirebase() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
}
  

