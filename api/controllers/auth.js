const User = require("../models/User.js");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//Register
const register = async (req, res) => {
  try {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(501).json(err);
  }
};

//login

const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("user is not found");
    const validate = await bcrypt.compare(req.body.password, user.password);
    !validate && res.status(400).json("password is not matched!");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  register,
  login,
};
