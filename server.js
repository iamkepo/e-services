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
app.use('/api/public/stock/post', route.api.public.poststock),
app.use('/api/public/group/icon', route.api.public.groupicon),
app.use('/api/public/icon', route.api.public.icon),
app.use('/api/public/pic', route.api.public.pic),

//api private
app.use('/api/private/auth/register', route.api.private.register);
app.use('/api/private/auth/login', route.api.private.login);
app.use('/api/private/auth/refreshToken', route.api.private.refreshToken);
app.use('/api/private/user/get', route.api.private.user);
app.use('/api/private/user/me', route.api.private.me);
app.use('/api/private/icon/create', route.api.private.createicon);


connect.start().then(()=> {

});



// var instagram = require('./robot/instagram');
// instagram.connexion();

// var twitter = require('./robot/twitter');
// twitter.connexion();


module.exports = app;
