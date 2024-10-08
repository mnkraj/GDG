const express = require("express");
const verifyToken = require("../config/verifyToken.js");
const {
  create,
  deletepost,
  getposts,
  updatepost,
} = require("../controllers/post.controller.js");
const router = express.Router();

router.post("/create", create);
router.get("/getposts", getposts);
router.delete("/deletepost/:slug", deletepost);
router.put("/updatepost/:postId/:userId", updatepost);

module.exports = router;
