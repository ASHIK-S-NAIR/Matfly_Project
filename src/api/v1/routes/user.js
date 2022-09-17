const { Router } = require("express");
const { updateUser, getUser, deleteUser } = require("../controllers/user");
const { isSignedIn, isAuthenticated } = require("../middlewares/auth");
const { getUserById } = require("../middlewares/user");
const router = Router();

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
router.delete("/user/:userId", isSignedIn, isAuthenticated, deleteUser);

module.exports = router;