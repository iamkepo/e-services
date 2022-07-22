const axios = require('axios');

let refreshToken;

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

instance.interceptors.response.use(
  (response) => {
    return response;
  }, 
  async (error) => {
    const originalRequest = error.config;
    if (error.config.url != '/refreshToken' && error.response.status === 401 && originalRequest._retry !== true) {
      originalRequest._retry = true;
      if (refreshToken && refreshToken != '') {
        instance.defaults.headers.common['authorization'] = `Bearer ${refreshToken}`;
        console.log('refresh token');
        await instance.post('/refreshToken').then((response) => {
          instance.defaults.headers.common['authorization'] = `Bearer ${response.data.accessToken}`;
          originalRequest.headers['authorization'] = `Bearer ${response.data.accessToken}`;
        }).catch((error) => {
          console.log(error.response.status);
          refreshToken = null;
        });
        return instance(originalRequest);
      }
    }
  }
);

function loginUser(data) {
  console.log('trying to login');
  instance.post('/login', data).then((response) => {
    console.log('auth success');
    getUsersInfos();
    instance.defaults.headers.common['authorization'] = `Bearer ${response.data.accessToken}`;
    refreshToken = response.data.refreshToken;
  }).catch((err) => {
    console.log(err.response?.status);
  });
}

function loadUserInfos() {
  instance.get('/me').then((response) => {
    console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}

function getUserInfos(id) {
  instance.get('/user/'+id).then((response) => {
    if (response.status === 200) {
      console.log(response.data);
    } else {
      console.log(response);
    }
  }).catch((err) => {
    console.log(err.response?.status);
  });
}

function getUsersInfos() {
  instance.get('/users').then((response) => {
      console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}

function registerUser(data) {
  console.log('trying to register');
  instance.post('/register', data).then((response) => {
    console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}

const user = {
  email: 'user1@gmail.com',
  password: '123'
}


loginUser(user);
