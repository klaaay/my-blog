module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    if (!req.session.user) {
      return res.redirect("/signin");
    }
    next();
  },
  checkNotLogin: function checkNotLogin(req, res, next) {
    if (req.session.user) {
      return res.redirect("backs"); // 返回之前的页面
    }
    next();
  }
};
