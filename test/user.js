const {instance, login, register} = require('./instance');

function getUserInfos(number) {
  instance.get('/bouffe/user/get/'+number).then((response) => {
    console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}

function getUsersInfos() {
  instance.get('/bouffe/users/get').then((response) => {
      console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}

function me() {
  instance.get('/bouffe/user/me').then((response) => {
    console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}

function clientPutUser(user) {
  instance.put('/bouffe/user/put', user).then((response) => {
    console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}
function clientDeleteUser() {
  instance.delete('/bouffe/user/delete').then((response) => {
    console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}
const user0 = {
  number: '22996772269',
  role: 'admin'
}
const user1 = {
  number: '22996772270',
  role: 'resto'
}
const user2 = {
  number: '22996772271',
  role: 'client'
}
// register(user2)
// login(user2, () => {
//   clientDeleteUser();
//   setTimeout(() => getUsersInfos(), 60001) 
// }); 