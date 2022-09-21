
module.exports = {
  api: {
    public: {
      poststock: require('./api/public/stock/post'),
      groupicon: require('./api/public/icon/group/get'),
      icon: require('./api/public/icon/get'),
      pic: require('./api/public/pic'),
    },
    private: {
      register: require('./api/private/auth/register'),
      login: require('./api/private/auth/login'),
      refreshToken: require('./api/private/auth/refreshToken'),
      user: require('./api/private/user/get'),
      me: require('./api/private/user/me/get'),
      createicon: require('./api/private/icon/create'),
    }
  },
  page: {
    index: require('./page/index'),
  }
};