const { get } = require("mongoose");
const Hackathon = require("../models/Hackathon.model");

const register = async (req, res, next) => {
  try {
    const { teamName, members, github } = req.body;

    // Check if teamName already exists
    const existingTeamName = await Hackathon.findOne({ teamName });
    if (existingTeamName) {
      return res.json({ msg: "Team name already exists", success: false });
    }

    // Check if any member's registrationNumber already exists
    const existingRegistrationNumber = await Hackathon.findOne({
      "members.registrationNumber": {
        $in: members.map((member) => member.registrationNumber),
      },
    });
    if (existingRegistrationNumber) {
      return res.json({
        msg: "Registration number already exists",
        success: false,
      });
    }

    // Create a new Hackathon document
    const team = new Hackathon({ teamName, members, github });

    // Save the new Hackathon document
    const savedTeam = await team.save();

    console.log(savedTeam);

    // Respond with success message and the saved Hackathon document
    return res.json({ msg: "success", success: true, data: savedTeam });
  } catch (error) {
    console.error("Error registering team:", error);
    return res
      .status(500)
      .json({ error: "Internal server error", success: false });
  }
};
const getTeams = async (req, res) => {
  try {
    const teams = await Hackathon.find();
    return res.json({ success: true, data: teams });
  } catch (error) {
    console.error("Error fetching teams:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
};
module.exports = {
  register,
  getTeams,
};
