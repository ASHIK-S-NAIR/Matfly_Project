const User = require("../models/user");
const UserInfo = require("../models/userInfo");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { userName, name, email, password } = req.body;

  try {
    const user = await User.create({
      userName,
      name,
      email,
      password,
    });

    if (!user) {
      return res.status(500).json({
        message: "Failed to create User",
      });
    }
    const userInfo = await UserInfo.create({
      userId: user._id,
    });

    if (!userInfo) {
      return res.status(500).json({
        message: "Failed to create User",
      });
    }

    return res.status(201).json({ userName, name, email });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      message: "Failed to create User",
    });
  }
};

exports.login = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(400).json({
        error: "Invalid userName or password one",
      });
    }

    if (await user.authenticate(password)) {
      const token = jwt.sign({ _id: user._id }, process.env.SECRET);
      const { _id, userName, name, email, status } = user;
      return res.status(200).json({
        token,
        user: {
          _id,
          userName,
          name,
          email,
          status,
        },
      });
    }

    return res.status(500).json({
      error: "Invalid email or password two",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to login",
    });
  }
};
