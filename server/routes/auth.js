const router = require("express").Router();
const UserController = require("../controllers/user");

router.post("/register", UserController.register);
router.post("/login", UserController.login)
router.post("/loginGoogle", UserController.loginGoogle)

module.exports = router;