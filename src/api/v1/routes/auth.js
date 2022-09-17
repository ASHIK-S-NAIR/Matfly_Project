const { Router } = require("express");
const router = Router();

const { signup, login } = require("../controllers/auth");
const {
  signupValidationSchema,
  loginValidationSchema,
} = require("../middlewares/validation/authSchema");
const {
  validateRequestSchema,
} = require("../middlewares/validation/validate-request-schema");

router.post(
  "/auth/signup",
  signupValidationSchema,
  validateRequestSchema,
  signup
);
router.post("/auth/login", loginValidationSchema, validateRequestSchema, login);

module.exports = router;
