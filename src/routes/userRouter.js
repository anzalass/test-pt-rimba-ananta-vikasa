const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  getUserByID,
  updateUser,
  deleteUser,
} = require("../controller/userController");
const {
  createUserValidator,
  getUserByIDValidator,
  updateUserValidator,
  deleteUserValidator,
  validate,
} = require("../validator/userValidator");

router.post("/users", createUserValidator, validate, createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserByIDValidator, validate, getUserByID);
router.put("/users/:id", updateUserValidator, validate, updateUser);
router.delete("/users/:id", deleteUserValidator, validate, deleteUser);

module.exports = router;
