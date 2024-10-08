const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require("../models/Admin")
const Model = require("../models/model")

router.post("/delete", async (req, res) => {
    const { registration } = req.body;
  console.log(registration)
    try {
      // Find the item with the given registration and delete it
      const deletedItem = await Model.findOneAndDelete({ registration: registration });
  
      if (!deletedItem) {
        return res.status(404).json({ error: "Item not found" });
      }
  
      return res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
      console.error("Error deleting item:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
  
  module.exports = router;
