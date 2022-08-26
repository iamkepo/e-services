const {instance, login} = require('./instance');

function createicon() {
  console.log('trying to create icon');
  instance.post('/private/icon/create').then((response) => {
    console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}
function group_icons() {
  instance.get('/public/group/icon').then((response) => {
      console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}
function icons(id) {
  instance.get('/public/icon/'+id).then((response) => {
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
//login(admin, createicon);
group_icons();
icons('6308b07cbf835204bab44346')