// src/routes/auth.routes.js
const express = require("express");
const router = express.Router();
const { registerUser, loginUser, googleLoginUser } = require("../controllers/userAuth.controller");
const { registerAdmin, loginAdmin } = require("../controllers/adminAuth.controller");

// User Auth Routes
router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.post("/user/google", googleLoginUser);

// Admin Auth Routes
router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);

module.exports = router;