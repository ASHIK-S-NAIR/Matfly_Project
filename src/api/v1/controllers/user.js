const User = require("../models/user");
const UserInfo = require("../models/userInfo");

exports.getUser = async (req, res) => {
  return res.status(200).json({
    _id: req.profile._id,
    userName: req.profile.userName,
    name: req.profile.name,
    email: req.profile.email,
    status: req.profile.status,
  });
};

exports.updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      { _id: req.profile._id },
      { $set: req.body },
      { new: true }
    );

    return res.status(200).json({
      message: "Successfully updated the user",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update user",
    });
  }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.deleteOne({_id: req.profile._id});
        await UserInfo.deleteOne({userId: req.profile._id});

        return res.status(200).json({
            message: "Successfully deleted the user",
          });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to delete user",
          });
    }
}
