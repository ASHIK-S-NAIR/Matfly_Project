const { body } = require("express-validator");

exports.signupValidationSchema = [
  body("userName")
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("userName is required")
    .isString()
    .withMessage("userName must be as string")
    .isLength({ max: 32 })
    .withMessage("userName legnth must be within 32"),
  body("name")
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("name is required")
    .isString()
    .withMessage("name must be as string")
    .isLength({ max: 50 })
    .withMessage("name legnth must be within 50"),
  body("email")
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("Email is required")
    .isEmail()
    .withMessage("valid email is needed"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be atleat 6 characters"),
];

exports.loginValidationSchema = [
    body("userName")
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage("userName is required")
      .isString()
      .withMessage("userName must be string"),
    body("password")
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage("password is required"),
  ];
