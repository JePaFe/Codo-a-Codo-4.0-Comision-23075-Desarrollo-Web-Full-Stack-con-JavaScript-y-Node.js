const express = require("express");
const router = express.Router();

const productosController = require("../controllers/productosController");

router.get("/", productosController.index);
router.get("/:id", productosController.show);

router.post("/create", productosController.create);
router.put("/update", productosController.update);

module.exports = router;
