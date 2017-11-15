//this is server side stuff

/*
EXPRESS SET UP
*/
//sets up express initally
const express = require('express');
const app = express();

//sets up express for the react views
app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine());
app.set('views','./src/views');

/*
FIREBASE SETUP
*/
//sets up the admin creditionals
var admin = require("firebase-admin");
var serviceAccount = require("../../creditionals/firebase-secret.json");
//inializes the app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://testing-cb46e.firebaseio.com"
});

/*
CODE
*/
app.get('/', (req, res) => {
	res.render('article',{title:'<3',paragraph:"Now, this is a story all about how. My life got flipped-turned upside down. And I'd like to take a minute. To sit right there I'll tell you how I became the prince of a town called Bel Air."});
});
//initalizes the listening on port 3000 for website related traffic.
app.listen(3000,()=>{console.log("listening on port 3000")});