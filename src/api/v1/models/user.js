const { Schema, model } = require("mongoose");
const { createHmac } = require("crypto");
const { v4 } = require("uuid");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      maxlength: 32,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 32,
    },
    status: {
      type: Number,
      default: 1,
    },
    encry_password: String,
    salt: String,
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = v4();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

  userSchema.methods = {
    authenticate: function (plainPassword) {
      return this.securePassword(plainPassword) === this.encry_password;
    },
    securePassword: function (plainPassword) {
      if (!plainPassword) {
        return "";
      }
      try {
        return createHmac("sha256", this.salt)
          .update(plainPassword)
          .digest("hex");
      } catch (error) {
        console.log(error.message);
      }
    },
  };

  module.exports = model("User", userSchema);
