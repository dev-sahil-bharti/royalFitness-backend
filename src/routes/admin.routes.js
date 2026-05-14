// src/routes/admin.routes.js
const express = require("express");
const router = express.Router();
const { getAdminProfile, updateAdminProfile } = require("../controllers/admin/admin.controller");
const { 
    getUsers, 
    getUserDetails, 
    updateUser, 
    deleteUser, 
    toggleBlockUser, 
    activateMembership, 
    deactivateMembership,
    createUser
} = require("../controllers/admin/manageUsers.controller");
const { protectAdmin } = require("../middleware/auth.middleware");

// admin routes
router.get("/profile", protectAdmin, getAdminProfile);
router.put("/profile", protectAdmin, updateAdminProfile);

// Manage Users
router.get("/users", protectAdmin, getUsers);
router.post("/users", protectAdmin, createUser);
router.get("/users/:id", protectAdmin, getUserDetails);
router.put("/users/:id", protectAdmin, updateUser);
router.delete("/users/:id", protectAdmin, deleteUser);
router.put("/users/:id/block", protectAdmin, toggleBlockUser);
router.put("/users/:id/membership/activate", protectAdmin, activateMembership);
router.put("/users/:id/membership/deactivate", protectAdmin, deactivateMembership);

module.exports = router;
