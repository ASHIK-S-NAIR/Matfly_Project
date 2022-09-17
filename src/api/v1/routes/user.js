const { Router } = require("express");
const { updateUser } = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../middlewares/auth");
const router = Router();

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

module.exports = router;