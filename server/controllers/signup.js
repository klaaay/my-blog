const config = require("../config");
const User = require("../models/user");

exports.signup = async (req, res, next) => {
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
  let user = new User({
    name,
    gender,
    bio,
    password,
    avatar: `${config.serverUrl}${path}`
  });
  try {
    await user.save();
    // req.session.user = user;
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
};