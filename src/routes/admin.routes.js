// src/routes/admin.routes.js
const express = require("express");
const router = express.Router();
const { getAdminProfile, getAllUsers } = require("../controllers/admin/admin.controller");
const { protectAdmin } = require("../middleware/auth.middleware");

// Admin routes (protected by protectAdmin)
router.get("/profile", protectAdmin, getAdminProfile);
router.get("/users", protectAdmin, getAllUsers);

module.exports = router;
