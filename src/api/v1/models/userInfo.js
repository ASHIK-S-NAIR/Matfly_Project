const { Schema, model } = require("mongoose");

const userInfoSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    nickName: {
      type: String,
      maxlength: 32,
      trim: true,
      default: "",
    },
    mobile: {
      type: Number,
      unique: true,
      default: "",
    },
    address: {
      houseName: {
        type: String,
        maxlength: 50,
        trim: true,
        default: "",
      },
      street: {
        type: String,
        maxlength: 50,
        trim: true,
        default: "",
      },
    },
    country: {
      type: String,
      maxlength: 32,
      trim: true,
      default: "",
    },
    state: {
      type: String,
      maxlength: 32,
      trim: true,
      default: "",
    },
    city: {
      type: String,
      maxlength: 32,
      trim: true,
      default: "",
    },
    pinCode: {
      type: Number,
      default: "",
    },
    profileImage: {
      profileImagePublicId: {
        type: String,
        unique: true,
        default: "",
      },
      profileImageUrl: {
        type: String,
        unique: true,
        default: "",
      },
    }
  },
  { timestamps: true }
);

module.exports = model("UserInfo", userInfoSchema);
