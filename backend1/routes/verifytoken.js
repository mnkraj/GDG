const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

router.get("/verify/:token", async (req, res) => {
    const token = req.params.token;
  
    try {
      const user = await Admin.findOne({ verificationToken: token });
  
      if (!user) {
        return res.status(404).json({ success: false, message: "Invalid verification token" });
      }
  
      // Mark the user as verified
      user.verified = true;
      user.verificationToken = undefined;
      await user.save();
  
      res.send("User verified successfully"); // Redirect to login page or any other page
  
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  });
module.exports = router;