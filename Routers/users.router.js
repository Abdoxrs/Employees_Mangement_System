const express = require("express");
const userController = require("../Controllers/users.controller");
const router = express.Router();
// CRUD operations for Users

router.post("/signup", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/:id", userController.getUserById);
router.get("/", userController.getAllUsers);
router.delete("/", userController.deleteAllUsers);
router.get("/:id", userController.getUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
