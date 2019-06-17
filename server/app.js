//imports
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var firebaseDB = require("./routes/fire.js");

//defining express app
var app = express();

//adding whats needed by express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routes(app);

//hosting on port 3001
const PORT = 3001;

var server = app.listen(PORT, function() {
    console.log("app running on port.", server.address().port);
});