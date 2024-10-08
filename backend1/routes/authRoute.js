const express = require("express");

const { registerController,authenticate } = require("../controllers/uploadMember");
const router = express.Router();

router.route("/addmember").post(registerController);
router.route("/authenticate").post(authenticate);

module.exports = router;
