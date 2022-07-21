var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

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
var loginAPI = require('./routes/api/login');
var registerAPI = require('./routes/api/register');
var usersAPI = require('./routes/api/users');
var userAPI = require('./routes/api/user');
var refreshTokenAPI = require('./routes/api/refreshToken');

//page routes use
app.use('/', index);

//api routes use
app.use('/api/register', registerAPI);
app.use('/api/login', loginAPI);
app.use('/api/refreshToken', refreshTokenAPI);
app.use('/api/users', usersAPI);
app.use('/api/user', userAPI);


connect.start().then(()=>{
  //connect.testColors();
  //connect.insertCellules();
  // io.on('connection', (socket) => {
  //   console.log('a user connected');
  
  //   socket.on('Click', (click) => {
  //     //console.log(click);
  //     connect.updateCellule(click);
  //     io.emit('Click', click);
  //   });
    
  //   socket.on('disconnect', () => {
  //     console.log('user disconnected');
  //   });
    
  // });
});

// var icons = require('./strapping/icons');
// icons.get()

// var instagram = require('./robot/instagram');
// instagram.connexion();

// var twitter = require('./robot/twitter');
// twitter.connexion();

// var screenshot = require('./strapping/screenshot');
// screenshot.get("https://classe19.com");

module.exports = app;
