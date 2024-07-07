// routes/users.js

const router = require("express").Router();
const { handleLogin } = require("../controllers/user.controller");

router.post("/login", handleLogin);

module.exports = router;
