const { Router } = require("express");
const router = Router();

const {signup, login} = require("../controllers/auth");

router.post("/auth/signup", signup);
router.post("/auth/login", login);

module.exports = router;