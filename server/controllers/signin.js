const User = require("../models/user");

const { tokenForUser } = require("../utils");

exports.signin = async (req, res, next) => {
  try {
    let user = await User.findOne({ _id: req.user._id })
      .lean()
      .exec();
    user.token = tokenForUser(req.user);
    console.log(user);
    return res.status(200).json({ ...user, status: 1, message: "登录成功" });
  } catch (error) {
    next(error);
  }
};