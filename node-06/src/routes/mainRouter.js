const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Pagina principal");
});

router.get("/contacto", (req, res) => {
  res.send("Pagina de contacto");
});

module.exports = router;
