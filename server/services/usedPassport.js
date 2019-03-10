const passport = require("passport");
const User = require("../models/user");
const config = require("../config");

const JwtStrategy = require("passport-jwt").Strategy;
const Extractjwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

const localOptions = {
  usernameField: "name"
};

const localLogin = new LocalStrategy(localOptions, async function(
  name,
  password,
  done
) {
  try {
    const user = await User.findOne({ name: name }).exec();
    if (!user) {
      return done(null, false);
    }
    console.log(user);
    user.comparePassword(password, function(err, isMatch) {
      if (err) {
        return done(err);
      }
      if (!isMatch) {
        return done(null, false);
      }
      return done(null, user);
    });
  } catch (error) {
    done(error);
  }
});

const jwtOptions = {
  jwtFromRequest: Extractjwt.fromHeader("authorization"),
  secretOrKey: config.jwtSecret
};

const jwtLogin = new JwtStrategy(jwtOptions, async function(payload, done) {
  try {
    const user = await User.findById(payload.sub);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(err, false);
  }
});

passport.use(jwtLogin);
passport.use(localLogin);