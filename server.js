var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var {connect} = require('./model/connect');

//api routes import
var route = require('./routes/index');

//app use
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//start routing
route(app);


connect();



// var instagram = require('./robot/instagram');
// instagram.connexion();

// var twitter = require('./robot/twitter');
// twitter.connexion();


module.exports = app;
