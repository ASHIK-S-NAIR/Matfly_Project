const { Router } = require("express");
const { getUserInfo, updateUserInfo } = require("../controllers/userInfo");
const { isSignedIn, isAuthenticated } = require("../middlewares/auth");
const { getUserById } = require("../middlewares/user");
const router = Router();

const multer = require("multer");
const {
  updateUserInfoValidation,
} = require("../middlewares/validation/userInfoSchema");
const {
  validateRequestSchema,
} = require("../middlewares/validation/validate-request-schema");

var upload = multer({ dest: "uploads/" });

router.param("userId", getUserById);

router.get("/userinfo/:userId", isSignedIn, isAuthenticated, getUserInfo);
router.put(
  "/userinfo/:userId",
  isSignedIn,
  isAuthenticated,
  updateUserInfoValidation,
  validateRequestSchema,
  upload.single("file"),
  updateUserInfo
);

module.exports = router;
