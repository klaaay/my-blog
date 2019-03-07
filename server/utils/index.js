const config = require("../config");
const jwt = require("jwt-simple");

exports.tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.jwtSecret);
};