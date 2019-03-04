const path = require("path");
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const config = require("./config");
const pkg = require("./package");
const cors = require("cors");
const bodyParser = require("body-parser");


mongoose
  .connect(config.mongodb, {
    useNewUrlParser: true
  })
  .then(console.log("DB connected"));

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 设置静态文件目录
app.use('/public', express.static('public'));

// session 中间件
app.use(
  session({
    // 设置 cookie 中保存 session id 的字段名称
    name: config.session.key,
    // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    secret: config.session.secret,
    // 强制更新 session
    resave: true,
    // 设置为 false，强制创建一个 session，即使用户未登录
    saveUninitialized: false,
    // 过期时间，过期后 cookie 中的 session id 自动删除
    cookie: {
      maxAge: config.session.maxAge
    },
    // 将 session 存储到 mongodb
    store: new MongoStore({
      url: config.mongodb
    })
  })
);

// 路由
require("./routes/signin")(app);
require("./routes/signup")(app);
require("./routes/posts")(app);
require("./routes/comments")(app);

app.listen(config.port, () => {
  console.log(`${pkg.name} listening on port ${config.port}`);
});
