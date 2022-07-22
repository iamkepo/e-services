var socket = io();

const user = {
  email: 'user0@gmail.com',
  password: '123'
}

loginUser(user);

socket.on('Click', (click) => {
  console.log(click);
  
})