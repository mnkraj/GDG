const mongoose = require("mongoose");
const HackathonSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
    unique: true,
  },
  members: [
    {
      name: {
        type: String,
        required: true,
      },
      registrationNumber: {
        type: String,
        required: true,
      },
    },
  ],
  github: {
    type: String,
  },
  problemStatement: {
    type: String,
  },
});

const model = mongoose.model("Hackathon", HackathonSchema);
module.exports = model;
