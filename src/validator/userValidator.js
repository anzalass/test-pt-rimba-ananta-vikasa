const { body, param, validationResult } = require("express-validator");

// Validasi untuk create user
const createUserValidator = [
  body("name")
    .isString()
    .withMessage("Name should be a string")
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .isEmail()
    .withMessage("Invalid email address")
    .notEmpty()
    .withMessage("Email is required"),

  body("age")
    .isInt({ min: 18 })
    .withMessage("Age should be a number and at least 18")
    .notEmpty()
    .withMessage("Age is required"),
];

// Validasi untuk get user by ID
const getUserByIDValidator = [
  param("id").isUUID().withMessage("Invalid user ID"),
];

// Validasi untuk update user
const updateUserValidator = [
  param("id").isUUID().withMessage("Invalid user ID"),
  body("name").optional().isString().withMessage("Name should be a string"),
  body("email").optional().isEmail().withMessage("Invalid email address"),
  body("age")
    .optional()
    .isInt({ min: 18 })
    .withMessage("Age should be a number and at least 18"),
];

// Validasi untuk delete user
const deleteUserValidator = [
  param("id").isUUID().withMessage("Invalid user ID"),
];

// Middleware untuk mengecek error validasi
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  createUserValidator,
  getUserByIDValidator,
  updateUserValidator,
  deleteUserValidator,
  validate,
};
