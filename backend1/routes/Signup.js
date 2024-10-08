const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const randomstring = require('randomstring');
const nodemailer = require('nodemailer');
require('dotenv').config({path:'../.env'});
// const 
require('dotenv').config({path:'../.env'});
// const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const  { Resend } = require("resend");
// const dotenv = require("dotenv");
require("dotenv").config();
const resend = new Resend(process.env.RESEND_KEY);
// var transporter = nodemailer.createTransport({
//           service: 'gmail',
//           host: 'smtp.gmail.com',
//           port: 465,
//           secure: true,
//           socketTimeout: 30000,
//           logger: true,
//           auth: {
//             user: process.env.EMAIL_PRIMARY,
//             pass: process.env.EMAIL_PRIMARY_PASSWORD
//           }
//         });

router.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
  email = email.toLowerCase()
  const user= await Admin.findOne({email})
  const verificationToken = randomstring.generate({
    length: 64,
    charset: 'url-safe'
  });
  const salt = await bcrypt.genSalt(10);
  const secpwd = await bcrypt.hash(password, salt);
  try {
    if(user){
      return res.json({success:false,message:"user already exist with this email"})
    }
    Admin.create({
      name: name,
      email: email,
      password: secpwd,
      verificationToken: verificationToken
    });
    //console.log("data sent to databse")
    // const mailOptions = {
    //   from: process.env.EMAIL_PRIMARY,
    //   to: process.env.EMAIL_SECONDARY,
    //   subject: 'Email Verification',
    //   html: `Someone with the name :  ${name} and Email id : ${email} just registered on the GDSC Admin portal.<br> Click here https://gdscbackend-alpha.vercel.app/api/v1/verify/${verificationToken} to verify ${name}.`
    // };
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["shishu.jsrsidh@gmail.com"],
      subject: "Email Verification",
      html: `Someone with the name :  ${name} and Email id : ${email} just registered on the GDSC Admin portal.<br> Click here http://localhost:3080/api/v1/verify/${verificationToken} to verify ${name}.`,
    });
  
    // if (error) {
    //   return res.status(400).json({ error });
    // }
  
    // res.status(200).json({ data });
    // await transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //       if (error.code === 'EAUTH') {
    //           console.error('Authentication failed:', error);
    //       } else if (error.code === 'ENETUNREACH') {
    //           console.error('Network unreachable:', error);
    //       } else {
    //           console.error('Error sending email:', error);
    //       }
    //   } else {
    //       console.log('Email sent successfully:', info.response);
    //   }});
    res.json({ success: true ,email:email});
  } catch (e) {
    res.json({ success: false , message : "Internal Server Error" });
  }
});

module.exports = router;
