function formatRoute(app, path) {
  app.use(path.replace(".", ""), require(path));
}
module.exports = (app) => {
  app.use('/', require('./page/index'));
  
  formatRoute(app, './api/public/stock/post');

  formatRoute(app, './api/public/pic');
  formatRoute(app, './api/public/pics');

  formatRoute(app, './api/public/chatgpt3');

  formatRoute(app, './api/public/visite/get');
  formatRoute(app, './api/public/visite/post');

};