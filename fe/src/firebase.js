import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG5S5ItoZ3rYm7Ap-o0YPPtvc2ywao5Rs",
  authDomain: "ig-reels-clone-fe425.firebaseapp.com",
  projectId: "ig-reels-clone-fe425",
  storageBucket: "ig-reels-clone-fe425.appspot.com",
  messagingSenderId: "374055734356",
  appId: "1:374055734356:web:118e8bfb086f31c9c3f1c1",
  measurementId: "G-H7JXZTSWGV",
};


const firebaseApp = firebase.initializeApp(firebaseConfig)


const db = firebaseApp.firestore();
export default db;