
module.exports = {
  api: {
    public: {
      poststock: require('./api/public/stock/post'),
    },
    private: {
      register: require('./api/private/auth/register'),
      login: require('./api/private/auth/login'),
      refreshToken: require('./api/private/auth/refreshToken'),
      listuser: require('./api/private/user/list/get'),
      user: require('./api/private/user/one/get'),
      me: require('./api/private/user/me/get'),
    }
  },
  page: {
    index: require('./page/index'),
  }
};