const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.post("/refresh", userController.refresh);
router.post("/forgot-password", userController.forgetPassword);
router.post("/reset-password", userController.resetPassword);

module.exports = router;
