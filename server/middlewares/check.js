module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    if (!req.session.user) {
      return res.json({
        status: 0,
        message: "当前没有登录"
      });
    }
    next();
  },
  checkNotLogin: function checkNotLogin(req, res, next) {
    if (req.session.user) {
      return res.json({
        status: 0,
        message: "当前已经登录"
      });
    }
    next();
  }
};
