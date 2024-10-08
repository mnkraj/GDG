const express = require('express');
const router = express.Router();
const Member = require("../models/model");

router.get('/displaymembers', async (req, res) => {
    try {
        // Fetching all members from the database
        const members = await Member.find({});

        // Sorting the members based on the 'createdat' field in ascending order
        // const sortedMembers = members.sort((a, b) => a.createdat - b.createdat);

        res.json(members);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

module.exports = router;
