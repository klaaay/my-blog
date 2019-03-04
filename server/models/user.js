const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

userSchema.index({ name: 1 });
module.exports = mongoose.model("user", userSchema);
