const express = require("express");
const router = express.Router();

const controller = require("../controllers/authController");

router.get("/login", controller.login);
router.post("/login", controller.postLogin);

router.get("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

module.exports = router;
