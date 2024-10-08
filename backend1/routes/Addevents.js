const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Event = require("../models/Events")
const cloudinary=require('../utils/cloudnary.js')
router.post('/addevents', async (req, res) => {
    let { title,category,date,startTime,endTime,description,color,image } = req.body;
    
    //email = email.toLowerCase()
    try {
      const result=await cloudinary.uploader.upload(image,{
        folder:"products",
      })

        Event.create({
          title: title,
          category: category,
          date: date,
          startTime:startTime,
          endTime:endTime,
          description:description,
          //thumbnail: image, // Use the filename provided by multer
          thumbnailurl:result.secure_url,
          color:color
        });
        res.json({ success: true ,thumbnailurl:result.secure_url});
      } catch (e) {
        res.json({ success: false , message : "Internal Server Error" });
      }
  });

  module.exports = router;
