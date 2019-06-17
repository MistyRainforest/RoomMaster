const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyAmBDkJ4cUdTfg4A60hyEM654FiRyQlnfc",
    authDomain: "orbitalroommaster.firebaseapp.com",
    databaseURL: "https://orbitalroommaster.firebaseio.com",
    projectId: "orbitalroommaster",
    storageBucket: "orbitalroommaster.appspot.com",
    messagingSenderId: "937121360205",
    appId: "1:937121360205:web:a6a5379761942218"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  const firebaseDB = fire.firestore();
  module.exports = firebaseDB;