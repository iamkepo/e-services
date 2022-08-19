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
var API = require('./routes/route');




//page routes use
app.use('/', index);
 
//api routes use
app.use('/api/public/icon/group/get', API.public.groupicon);
app.use('/api/public/icon/get', API.public.icon);
app.use('/api/public/auth/register', API.public.register);
app.use('/api/public/auth/login', API.public.login);
app.use('/api/public/auth/refreshToken', API.public.refreshToken);

app.use('/api/private/user/list/get', API.private.listuser);
app.use('/api/private/user/one/get', API.private.user);
app.use('/api/private/user/me', API.private.me);



connect.start().then(()=> {
  
});



// var instagram = require('./robot/instagram');
// instagram.connexion();

// var twitter = require('./robot/twitter');
// twitter.connexion();


module.exports = app;
