const { checkNotLogin } = require("../middlewares/check");

module.exports = app => {
  // GET /signin 登录页
  app.get("/signin", checkNotLogin, function(req, res, next) {
    return res.send("登录页");
  });

  // POST /signin 用户登录
  app.post("/signin", checkNotLogin, function(req, res, next) {
    return res.send("登录");
  });
};
