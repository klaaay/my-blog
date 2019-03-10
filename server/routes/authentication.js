const passport = require("passport");
const passportService = require("../services/usedPassport");

const requireAuth = passport.authenticate("jwt", { session: false });

module.exports = app => {
  app.get("/auth", requireAuth, (req, res) => {
    res.send(req.user);
  });
};