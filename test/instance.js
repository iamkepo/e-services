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

function login(user, callback) {
  console.log('trying to login');
  instance.post('/private/auth/login', user).then((response) => {
    console.log('auth success');
    instance.defaults.headers.common['authorization'] = `Bearer ${response.data.accessToken}`;
    refreshToken = response.data.refreshToken;
    if (callback) {
      callback()
    }
  }).catch((err) => {
    console.log(err.response?.status);
  });
}
function me() {
  instance.get('/private/auth/me').then((response) => {
    console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}
function register(user) {
  console.log('trying to register');
  instance.post('/private/auth/register', user).then((response) => {
    console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}


module.exports = {instance, refreshToken, login, register, me}