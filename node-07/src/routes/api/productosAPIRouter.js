const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
  console.log(req.body);
  res.send("Producto creado con API: " + req.body.nombre);
});

module.exports = router;
