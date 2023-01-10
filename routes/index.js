function formatRoute(app, path) {
  app.use(path.replace(".", ""), require(path));
}
module.exports = (app) => {
  app.use('/', require('./page/index'));
  
  app.use('/api/public/stock/post', require('./api/public/stock/post'));
  formatRoute(app, './api/public/pic');
  formatRoute(app, './api/public/pics');

};