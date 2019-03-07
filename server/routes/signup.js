// const { checkNotLogin } = require("../middlewares/check");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const { signup } = require("../controllers/signup");

const upload = multer({ storage: storage });

module.exports = app => {
  // POST /signup 用户注册
  app.post("/signup", upload.single("avatar"), signup);
};
