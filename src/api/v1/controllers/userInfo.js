const UserInfo = require("../models/userInfo");
const cloudinary = require("../../../../setup/cloudinary");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

exports.getUserInfo = async (req, res) => {
  try {
    const userInfo = await UserInfo.findOne({ userId: req.profile._id });
    if (!userInfo) {
      return res.status(404).json({ message: "userInfo not found" });
    }
    return res.status(200).json({
      _id: userInfo._id,
      userId: userInfo.userId,
      nickName: userInfo.nickName,
      mobile: userInfo.mobile,
      address: userInfo.address,
      country: userInfo.country,
      state: userInfo.state,
      city: userInfo.city,
      pinCode: userInfo.pinCode,
      profileImage: userInfo.profileImage,
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to get UserInfo" });
  }
};

exports.updateUserInfo = async (req, res) => {
  try {
    await UserInfo.findOneAndUpdate(
      { userId: req.profile._id },
      { $set: req.body },
      { new: true }
    );

    if (req.file) {
      let result = await cloudinary.uploader.destroy(
        `${req.profile.userName}_${req.profile._id}`,
        {
          folder: "Matfly_Project/user",
        }
      );
      const file = req.file;
      result = await cloudinary.uploader.upload(file?.path, {
        folder: "Matfly_Project/user",
        public_id: `${req.profile.userName}_${req.profile._id}`,
      });

      await unlinkFile(file?.path);

      await UserInfo.findOneAndUpdate(
        { userId: req.profile._id },
        {
          $set: {
            profileImage: {
              profileImagePublicId: result.public_id,
              profileImageUrl: result.secure_url,
            },
          },
        },
        { new: true, useFindAndModify: false }
      );
    }

    return res.status(200).json({
      message: "Successfully updated the userInfo",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update userInfo",
    });
  }
};
