import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBZHD3jDSdBp_5iIG5vlR6uAMuMxNsBC5w",
    authDomain: "tik-tok-app-65a4d.firebaseapp.com",
    databaseURL: "https://tik-tok-app-65a4d.firebaseio.com",
    projectId: "tik-tok-app-65a4d",
    storageBucket: "tik-tok-app-65a4d.appspot.com",
    messagingSenderId: "630772084515",
    appId: "1:630772084515:web:3eb7b7ee1efa89db022696",
    measurementId: "G-C0VLT2D142"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;