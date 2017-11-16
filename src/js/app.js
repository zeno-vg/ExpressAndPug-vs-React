const React = require('react');
const ReactDOM = require('react-dom');
//import { renderToString } from 'react-dom/server';
import {default as admin} from 'firebase-admin';
//import React from 'react'
//this is server side stuff
/*
EXPRESS SET UP
*/
//sets up express initally
import express from 'express';
//const express = require('express');
const app = express();

//sets up express for the react views
//app.set('view engine','jsx');
///app.engine('jsx',require('express-react-views').createEngine());
//app.set('views','./src/views');

/*
FIREBASE SETUP
*/
//sets up the admin creditionals - this could be done as a import, but i think that it makes more sense reading the code to do it
//this way.
var serviceAccount = require("../../credentials/firebase-secret.json");
//inializes the app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://testing-cb46e.firebaseio.com",
  databaseAuthVariableOverride: {
    uid: "server"
  },
});
const database = admin.database();
/*
CODE
*/
/*ReactDOM.render(<Article/>,document.getElementById("appHolder")
);*/
app.get('/', (req, res) => {
	res.send("Hello World!");
});
//initalizes the listening on port 3000 for website related traffic.
//this is now on 3000
app.listen(3000,()=>{console.log("listening on port 3000")});