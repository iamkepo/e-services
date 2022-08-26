const {instance, login} = require('./instance');

function createicon() {
  console.log('trying to create icon');
  instance.post('/private/icon/create').then((response) => {
    console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}

const admin = {
  email: 'azer@gmail.com',
  password: 'azer'
}
const user = {
  email: 'user0@gmail.com',
  password: '123'
}
login(user, createicon);
