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

// PUT /api/admin/profile
const updateAdminProfile = async (req, res) => {
    try {
        const { name, phone, age, gender } = req.body;
        
        const updatedAdmin = await Admin.findByIdAndUpdate(
            req.admin.id,
            { name, phone, age, gender },
            { new: true, runValidators: true }
        ).select("-password -confirmPassword");

        if (!updatedAdmin) {
            return res.status(404).json({ success: false, message: "Admin not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Admin profile updated successfully",
            data: updatedAdmin,
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getAdminProfile, updateAdminProfile };
