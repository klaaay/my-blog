const { checkLogin } = require("../middlewares/check");

// GET /signout 登出
module.exports = app => {
  app.get("/signout", (req, res, next) => {
    // 清空 session 中用户信息
    req.session.user = null;
    res.status(200).json({
      status: 1,
      message: "登出成功"
    });
  });
};