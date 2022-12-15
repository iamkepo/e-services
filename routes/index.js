function formatRoute(app, path) {
  app.use(path.replace(".", ""), require(path));
}
module.exports = (app) => {
  app.use('/', require('./page/index'));
  
  app.use('/api/public/stock/post', require('./api/public/stock/post'));
  formatRoute(app, './api/public/pic');
  formatRoute(app, './api/public/pics');

  
  formatRoute(app, './api/bouffe/version/get');
  formatRoute(app, './api/bouffe/version/check');
  formatRoute(app, './api/bouffe/version/post');
  formatRoute(app, './api/bouffe/version/put');
  formatRoute(app, './api/bouffe/version/delete');

  formatRoute(app, './api/bouffe/versions/get');


  formatRoute(app, './api/bouffe/auth/register');
  formatRoute(app, './api/bouffe/auth/login');
  formatRoute(app, './api/bouffe/auth/refreshToken');

  formatRoute(app, './api/bouffe/user/me');
  formatRoute(app, './api/bouffe/user/get');
  formatRoute(app, './api/bouffe/user/put');
  formatRoute(app, './api/bouffe/user/delete');

  formatRoute(app, './api/bouffe/users/get');
};