const { checkLogin } = require("../middlewares/check");

module.exports = app => {
  app.get("/posts", (req, res, next) => {
    return res.send("主页");
  });
  // POST /posts/create 发表一篇文章
  app.post("/posts/create", checkLogin, function(req, res, next) {
    return res.send("发表文章");
  });

  // GET /posts/create 发表文章页
  app.get("/posts/create", checkLogin, function(req, res, next) {
    return res.send("发表文章页");
  });

  // GET /posts/:postId 单独一篇的文章页
  app.get("/posts/:postId", function(req, res, next) {
    return res.send("文章详情页");
  });

  // GET /posts/:postId/edit 更新文章页
  app.put("/posts/:postId", checkLogin, function(req, res, next) {
    return res.send("更新文章页");
  });

  // POST /posts/:postId/edit 更新一篇文章
  app.patch("/posts/:postId", checkLogin, function(req, res, next) {
    return res.send("更新文章");
  });

  // GET /posts/:postId/remove 删除一篇文章
  app.delete("/posts/:postId", checkLogin, function(req, res, next) {
    return res.send("删除文章");
  });
};
