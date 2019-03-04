const { checkLogin } = require("../middlewares/check");

module.exports = app => {
  // POST /comments 创建一条留言
  app.post("/comments", checkLogin, (req, res, next) => {
    return res.send("创建留言");
  });

  // GET /comments/:commentId/remove 删除一条留言
  app.delete("/comments/:commentId", checkLogin, (req, res, next) => {
    return res.send("删除留言");
  });
};