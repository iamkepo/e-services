const { Server } = require('socket.io');

function start(server) {
  
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('a user connected: '+ socket.id);
    socket.on('Click', (click) => {
      //console.log(click);
      socket.broadcast.emit('Click', click);
    });
    
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    
  });
}

module.exports = {
  start: start
};