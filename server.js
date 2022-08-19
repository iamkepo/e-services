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

//api routes import
var route = require('./routes/route');




//page
app.use('/', route.page.index);
 
//api public
app.use('/api/public/icon/group/get', route.api.public.groupicon);
app.use('/api/public/icon/one/get', route.api.public.icon);
app.use('/api/public/auth/register', route.api.public.register);
app.use('/api/public/auth/login', route.api.public.login);
app.use('/api/public/auth/refreshToken', route.api.public.refreshToken);
app.use('/api/public/stock/post', route.api.public.poststock),

//api private
app.use('/api/private/user/list/get', route.api.private.listuser);
app.use('/api/private/user/one/get', route.api.private.user);
app.use('/api/private/user/me', route.api.private.me);



connect.start().then(()=> {
  
});



// var instagram = require('./robot/instagram');
// instagram.connexion();

// var twitter = require('./robot/twitter');
// twitter.connexion();


module.exports = app;
