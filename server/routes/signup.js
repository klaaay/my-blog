const config = require("../config");
const User = require("../models/user");
const sha1 = require("sha1");
const { checkNotLogin } = require("../middlewares/check");
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

// const { signup } = require("../controllers/signup");

var upload = multer({ storage: storage });

module.exports = app => {
  // GET /signup 注册页
  app.get("/signup", checkNotLogin, function(req, res, next) {
    return res.send("注册页");
  });

  // POST /signup 用户注册
  app.post(
    "/signup",
    checkNotLogin,
    upload.single("avatar"),
    async (req, res, next) => {
      const { name, gender, bio } = req.body;
      let { password } = req.body;
      const { path } = req.file;
      const findname = await User.find({ name: name }).exec();
      if (findname.length !== 0) {
        return res.json({
          status: 0,
          message: "该账号已经存在"
        });
      }
      var user = new User({
        name,
        gender,
        bio,
        password: sha1(password),
        avatar: `${config.serverUrl}${path}`
      });
      try {
        await user.save();
        return res.json({
          status: 1,
          message: "账号注册成功"
        });
      } catch (error) {
        return res.json({
          status: 0,
          message: "账号注册失败"
        });
      }
    }
  );
};
