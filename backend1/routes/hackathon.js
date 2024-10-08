const express = require("express");

const { register } = require("../controllers/hackathon.controller.js");
const { getTeams } = require("../controllers/hackathon.controller.js");
const router = express.Router();

router.post("/register", register);
router.get("/get", getTeams);

module.exports = router;
