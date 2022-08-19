var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var connect = require('./helper/connect');

//app use
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//page routes import
var index = require('./routes/index');

//api routes import
var iconsAPI = require('./routes/api/service/icons');
var iconAPI = require('./routes/api/service/icon');
var usersAPI = require('./routes/api/service/users');
var userAPI = require('./routes/api/service/user');

var registerAPI = require('./routes/api/auth/register');
var loginAPI = require('./routes/api/auth/login');
var refreshTokenAPI = require('./routes/api/auth/refreshToken');
var meAPI = require('./routes/api/auth/me');

//page routes use
app.use('/', index);

//api routes use
app.use('/api/service/icons', iconsAPI);
app.use('/api/service/icon', iconAPI);
app.use('/api/service/users', usersAPI);
app.use('/api/service/user', userAPI);

app.use('/api/auth/register', registerAPI);
app.use('/api/auth/login', loginAPI);
app.use('/api/auth/refreshToken', refreshTokenAPI);
app.use('/api/auth/me', meAPI);



connect.start().then(()=> {
  
});



// var instagram = require('./robot/instagram');
// instagram.connexion();

// var twitter = require('./robot/twitter');
// twitter.connexion();


module.exports = app;
