const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      enum: ["m", "f", "x"],
      default: "x"
    },
    bio: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

// 在每次注册保存到数据库之前，为密码哈希加密
userSchema.pre("save", function(next) {
  const user = this;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      console.log(hash);
      // 保存加密后的密码
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(condidatePassword, callback) {
  bcrypt.compare(condidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

// userSchema.index({ name: 1 });
module.exports = mongoose.model("user", userSchema);
