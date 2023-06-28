const express = require("express");
const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname),
});
const uploadFile = multer({ storage });

const controller = require("../controllers/productController");

router.get("/create", controller.create);
router.post("/", uploadFile.single('image'), controller.store);

router.get("/", controller.index);
router.get("/:id", controller.show);

module.exports = router;
