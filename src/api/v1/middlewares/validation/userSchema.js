const { body } = require("express-validator");

exports.updateUserValidation = [
  body("userName")
    .optional()
    .isString()
    .withMessage("userName must be as string")
    .isLength({ max: 32 })
    .withMessage("userName legnth must be within 32"),
  body("name")
    .optional()
    .isString()
    .withMessage("name must be as string")
    .isLength({ max: 50 })
    .withMessage("name legnth must be within 50"),
  body("email").optional().isEmail().withMessage("valid email is needed"),
  body("status").optional().isNumeric().withMessage("status must be a number"),
];
