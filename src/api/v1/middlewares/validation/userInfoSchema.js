const { body } = require("express-validator");

exports.updateUserInfoValidation = [
  body("nickName")
    .optional()
    .isString()
    .withMessage("userName must be as string")
    .isLength({ max: 32 })
    .withMessage("userName legnth must be within 32"),
  body("mobile")
    .optional()
    .isNumeric()
    .withMessage("mobile must be number")
    .isLength({ min: 10, max: 10 })
    .withMessage("mobile must be 10 digits"),
  body("country")
    .optional()
    .isString()
    .withMessage("country must be as string")
    .isLength({ max: 32 })
    .withMessage("country must be within 32"),
  body("state")
    .optional()
    .isString()
    .withMessage("state must be as string")
    .isLength({ max: 32 })
    .withMessage("state must be within 32"),
  body("city")
    .optional()
    .isString()
    .withMessage("city must be as string")
    .isLength({ max: 32 })
    .withMessage("city must be within 32"),
  body("pinCode")
    .optional()
    .isNumeric()
    .withMessage("pinCode must be as Number"),
];
