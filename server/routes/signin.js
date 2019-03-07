// const { checkNotLogin } = require("../middlewares/check");
const passportService = require("../services/usedPassport");
const passport = require("passport");

// const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

const { signin } = require("../controllers/signin");

module.exports = app => {
  // POST /signin 用户登录
  app.post("/signin", requireSignin, signin);
};