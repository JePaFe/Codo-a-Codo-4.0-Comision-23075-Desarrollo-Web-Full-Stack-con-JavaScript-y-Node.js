const express = require("express");
const router = express.Router();

const controller = require('../controllers/userController')

router.get("/", controller.index);
router.get("/:id", controller.show);

router.post("/", controller.store);

module.exports = router;
