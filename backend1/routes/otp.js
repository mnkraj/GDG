const express = require("express");
const Model = require("../models/model");
const nodemailer = require("nodemailer");
const router = express.Router();
const crypto = require("crypto");
require("dotenv").config({ path: "../.env" });

const { Resend } = require("resend");

require("dotenv").config();

router.post("/otp", async (req, res) => {
  let { registration } = req.body;

  try {
    const user = await Model.findOne({ registration });
    // console.log(user);
    if (!user) return res.json({ msg: "BE MEMBER", success: false });
    if (!user.mail) {
      return res.json({
        success: false,
        msg: "PLEASE ADD YOUR EMAIL IN DATABASE",
      });
    }
    const otp = crypto.randomInt(100000, 999999).toString();
    // console.log("1");
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "ss691438@gmail.com",
        pass: "lprfbwpshahvlpsg",
      },
    });
    // console.log("2");

    const message = otp;
    // console.log("3");
    const info = await transporter.sendMail({
      from: "harshit26092004@test.com",
      to: user.mail,
      subject: "OTP Verification",
      text: message,
    });
    // console.log("4");
    // console.log(info);
    // console.log("5");
    console.log("Email sent Successfully");

    // Save the OTP in the user's record
    user.otp = otp;
    user.otpExpiration = Date.now() + 10 * 60 * 1000; // OTP expires in 10 minutes
    await user.save();
    // console.log("6");

    return res.json({ msg: "sent successfully", success: true });
  } catch (e) {
    res.json({ success: false, msg: "Internal Server Error fault" });
  }
});

// Verify OTP endpoint
router.post("/verify-otp", async (req, res) => {
  let { registration, otp } = req.body;

  const user = await Model.findOne({ registration });
  if (!user) {
    return res.json({ success: false, message: "User not found" });
  }

  // Check if OTP matches and is not expired
  if (user.otp === otp && Date.now() < user.otpExpiration) {
    // Clear OTP and expiration time
    user.otp = null;
    user.otpExpiration = null;
    await user.save();

    return res.json({ success: true, message: "OTP verified successfully" });
  } else {
    return res.json({ success: false, message: "Invalid or expired OTP" });
  }
});

module.exports = router;
