// src/controllers/admin.controller.js
const Admin = require("../../models/adminModel");
const User = require("../../models/userModel");

// GET /api/admin/profile
const getAdminProfile = async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin.id).select("-password -confirmPassword");
        if (!admin) {
            return res.status(404).json({ success: false, message: "Admin not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Admin profile fetched successfully",
            data: admin,
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

// GET /api/admin/users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).select("-password -confirmPassword");

        return res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            count: users.length,
            data: users,
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getAdminProfile, getAllUsers };
