const {instance} = require('./instance');

function clientGetLastVersion() {
  instance.get('/bouffe/version/get').then((response) => {
      console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}
function clientGetVersions() {
  instance.get('/bouffe/versions/get').then((response) => {
      console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}
function clientCheckVersion(code) {
  instance.get('/bouffe/version/check/'+code).then((response) => {
      console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}
function clientPostVersion(version) {
  instance.post('/bouffe/version/post', version).then((response) => {
    console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}
function clientPutVersion(version) {
  instance.put('/bouffe/version/put', version).then((response) => {
    console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}
function clientDeleteVersion(code) {
  instance.delete('/bouffe/version/delete/'+code).then((response) => {
    console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}
const data = {
  code: "0.0.2",
  link: "htpps://zappe.herokuapp.com"
}
// clientDeleteVersion(data.code)