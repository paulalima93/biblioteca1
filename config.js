import firebase from 'firebase';
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCaTgxpCVdEXUw43ZTfqoiTDC5PeLg3ya0",
    authDomain: "biblioteca-igor.firebaseapp.com",
    projectId: "biblioteca-igor",
    storageBucket: "biblioteca-igor.appspot.com",
    messagingSenderId: "130491347765",
    appId: "1:130491347765:web:bda30c36b8f88326e1927c",
    measurementId: "G-H6LWZJ0BFB"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()