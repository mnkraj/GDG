const Model = require("../models/model");
const Admin = require("../models/Admin");
const cloudinary = require("../utils/cloudnary.js");

const registerController = async (req, res) => {
  try {
    const {
      name,
      branch,
      teamType,
      team,
      year,
      image,
      registration,
      github,
      linkedin,
      mail,
      instagram,
      facebook,
      x,
    } = req.body;

    if (!name) {
      return res.status(400).send({ msg: "Name is required!" });
    }
    if (!registration) {
      return res.status(400).send({ msg: "Registration is required!" });
    }
    if (!branch) {
      return res.status(400).send({ msg: "Branch is required!" });
    }
    if (!team) {
      return res.status(400).send({ msg: "Team is required!" });
    }
    if (!teamType) {
      return res.status(400).send({ msg: "Team type is required!" });
    }
    if (!year) {
      return res.status(400).send({ msg: "Year is required!" });
    }

    let user = await Model.findOne({
      registration: registration.toUpperCase(),
    });

    if (user) {
      // If user exists, update their details
      user.name = name;
      user.branch = branch;
      user.teamType = teamType;
      user.mail = mail;
      user.instagram = instagram;
      user.x = x;
      user.facebook = facebook;
      user.github = github;
      user.linkedin = linkedin;
      // if(createdat)user.createdat = createdat ;

      user.team = team;
      user.year = year;
      if (image) {
        // If image is provided, upload to cloudinary and update URL
        const result = await cloudinary.uploader.upload(image, {
          folder: "products",
        });
        user.imageurl = result.secure_url;
      }
      await user.save();
      return res.status(200).send({
        success: true,
        msg: `User with the registration number ${registration} updated successfully`,
        user,
      });
    }

    // If user does not exist, create a new one
    const result = await cloudinary.uploader.upload(image, {
      folder: "products",
    });
    const newUser = await new Model({
      name,
      branch,
      registration: registration.toUpperCase(),
      year,
      github,
      linkedin,
      mail,
      facebook,
      instagram,
      x,
      team,
      teamType,
      imageurl: result.secure_url,
    }).save();

    res.status(201).send({
      success: true,
      msg: "User registered successfully",
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal server error why" });
  }
};

const authenticate = async (req, res) => {
  const { email } = req.body;
  const user = await Admin.findOne({ email });

  if (user && user.verified) {
    res.json({ success: true, msg: "Logged in" });
  } else {
    //
    return res.json({ success: false, msg: "please login" });
  }
};

module.exports = {
  registerController,
  authenticate,
};
