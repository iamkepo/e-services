// const { checkUser, disconnectUser, getUserSid } = require('../controller/users');
// const { addMessage, uploadFile } = require('../controller/messages');

function start(server) {
  
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    },
    maxHttpBufferSize: 1e8 // 100 MB
  });
  
  io.on('connect', (socket) => {
    //console.log(socket);
    socket.on('userConnexion', (me, callback) => {
      // checkUser({sid: socket.id, ...me}, (user, users)=>{
      //   console.log(user.sid);

      //   socket.broadcast.emit('userIsConnect', user);
    
      //   callback(user, users);
      // });
    });

    socket.on('join', (discussion, callback) => {

      console.log(discussion.COMMANDE_ID);

      socket.join(discussion.COMMANDE_ID);
      
      callback();
      
    });
    
    socket.on('typing', (COMMANDE_ID, callback) => {
      socket.broadcast.emit('isTyping', COMMANDE_ID);
      callback()
    });
    

    socket.on('sendMessage', (message, callback) => {
      //console.log(message);
      // addMessage(message, ()=>{
      //   io.to(message.room).emit('message', message);
      //   callback();
      // });
      
    });

    socket.on("upload", ({message, file}, callback) => {
      console.log(file); // <Buffer 25 50 44 ...>
      const params = {
        Key: message.message, // file will be saved as testBucket/contacts.csv
        Body: JSON.stringify(file, null, 2)
      };
      // uploadFile(params, (s3Err, data) => {
      //   if (s3Err) throw s3Err
      //   message.message = data.Location;
      //   addMessage(message, ()=>{
      //     io.to(message.room).emit('message', message);
      //     callback();
      //   });
      // })
    });
      
    socket.on('disconnect', () => {
      // disconnectUser(socket.id, (response)=>{
      //   if(response?.COMMANDE_ID != undefined) {
      //     socket.broadcast.to(response.COMMANDE_ID)
      //     .emit('userIsDisconnect', response);
      //   }
      // })
      
    })
    
  });
}

module.exports = {
  start
};