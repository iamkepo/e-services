
module.exports = {
  api: {
    public: {
      groupicon: require('./api/public/icon/group/get'),
      icon: require('./api/public/icon/one/get'),
      register: require('./api/public/auth/register'),
      login: require('./api/public/auth/login'),
      refreshToken: require('./api/public/auth/refreshToken'),
    },
    private: {
      listuser: require('./api/private/user/list/get'),
      user: require('./api/private/user/one/get'),
      me: require('./api/private/user/me/get'),
    }
  },
  page: {
    index: require('./page/index'),
  }
};