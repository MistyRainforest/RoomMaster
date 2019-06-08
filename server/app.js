//imports
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var firebase = require("firebase");

//defining express app
var app = express();

//adding whats needed by express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//init for firebase database
const firebaseConfig = {
    apiKey: "AIzaSyAmBDkJ4cUdTfg4A60hyEM654FiRyQlnfc",
    authDomain: "orbitalroommaster.firebaseapp.com",
    databaseURL: "https://orbitalroommaster.firebaseio.com",
    projectId: "orbitalroommaster",
    storageBucket: "orbitalroommaster.appspot.com",
    messagingSenderId: "937121360205",
    appId: "1:937121360205:web:a6a5379761942218"
  };
  const firebasedb = firebase.initializeApp(firebaseConfig);

routes(app);

const PORT = 3000;

var server = app.listen(PORT, function() {
    console.log("app running on port.", server.address().port);
});