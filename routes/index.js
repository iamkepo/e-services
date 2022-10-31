
module.exports = (app) => {
  app.use('/', require('./page/index'));
  
  app.use('/demo/pic', require('./page/pic'));
  app.use('/demo/pics', require('./page/pics'));
  
  app.use('/api/public/stock/post', require('./api/public/stock/post'));
  app.use('/api/public/icon/group/get', require('./api/public/icon/group/get'));
  app.use('/api/public/icon/get', require('./api/public/icon/get'));
  app.use('/api/public/pic', require('./api/public/pic'));
  app.use('/api/public/pics', require('./api/public/pics'));

  app.use('/api/private/auth/register', require('./api/private/auth/register'));
  app.use('/api/private/auth/login', require('./api/private/auth/login'));
  app.use('/api/private/auth/refreshToken', require('./api/private/auth/refreshToken'));
  app.use('/api/private/user/get', require('./api/private/user/get'));
  app.use('/api/private/user/me/get', require('./api/private/user/me/get'));
  app.use('/api/private/icon/create', require('./api/private/icon/create'));
};