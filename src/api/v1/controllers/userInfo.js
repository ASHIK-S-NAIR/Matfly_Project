const UserInfo = require("../models/userInfo");
const cloudinary = require("../../../../setup/cloudinary");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

exports.updateUserInfo = async (req, res) => {
    try {
        return console.log("Reached userInfo updation controller");
    } catch (error) {
        
    }
}

