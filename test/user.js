const {instance, login, register} = require('./instance');
const user = {
  email: 'user@gmail.com',
  password: '123'
}

function getUserInfos(id) {
  instance.get('/private/user/get/'+id).then((response) => {
    if (response.status === 200) {
      console.log(response.data[0]);
    } else {
      console.log(response);
    }
  }).catch((err) => {
    console.log(err.response?.status);
  });
}

function getUsersInfos() {
  instance.get('/private/user/get/all').then((response) => {
      console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}
//register(user)
login(user, ()=> getUserInfos('63089894d712e37e51afc3a4'));