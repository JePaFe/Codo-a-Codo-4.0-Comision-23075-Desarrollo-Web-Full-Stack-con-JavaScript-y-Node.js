const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
  console.log(req.body);
  res.send("Producto creado: " + req.body.nombre);
});

router.put("/update", (req, res) => {
  console.log(req.body);
  res.send("Producto modificado: " + req.body.nombre);
});

module.exports = router;
