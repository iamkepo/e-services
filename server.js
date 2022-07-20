var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// var icons = require('./strapping/icons');
// icons.get()

// var instagram = require('./robot/instagram');
// instagram.connexion();

// var twitter = require('./robot/twitter');
// twitter.connexion();

// var screenshot = require('./strapping/screenshot');
// screenshot.get("https://classe19.com");
var loginRouter = require('./routes/login');
var setuserRouter = require('./routes/setuser');
var getusersRouter = require('./routes/getusers');
var getuserRouter = require('./routes/getuser');
var getconfigRouter = require('./routes/getconfig');
var getrandomcolorRouter = require('./routes/getrandomcolor');
var getcolorRouter = require('./routes/getcolor');

var connect = require('./db/connect');

//route
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/setuser', setuserRouter);
app.use('/getusers', getusersRouter);
app.use('/getuser', getuserRouter);
app.use('/getconfig', getconfigRouter);
app.use('/getrandomcolor', getrandomcolorRouter);
app.use('/getcolor', getcolorRouter);

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

module.exports = app;
