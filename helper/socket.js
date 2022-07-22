function start(server) {
  const io = require('socket.io')(server);
  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('Click', (click) => {
      //console.log(click);
      io.emit('Click', click);
    });
    
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    
  });
}

module.exports = {
  start: start
};