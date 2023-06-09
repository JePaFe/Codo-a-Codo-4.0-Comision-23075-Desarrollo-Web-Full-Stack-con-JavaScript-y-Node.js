const create = (req, res) => {
  console.log(req.body);
  res.send("Producto creado: " + req.body.nombre);
};

const update = (req, res) => {
  console.log(req.body);
  res.send("Producto modificado: " + req.body.nombre);
};

module.exports = {
  create,
  update,
};
