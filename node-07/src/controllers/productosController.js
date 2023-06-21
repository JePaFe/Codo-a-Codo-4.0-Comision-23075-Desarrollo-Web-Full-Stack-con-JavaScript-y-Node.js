const { getProductos } = require("../models/Producto");
const { getProducto } = require("../services/productoService");

const index = async (req, res) => {
  const productos = await getProductos();
  // console.log(productos);
  res.send(productos);
};

const show = async (req, res) => {
  const producto = await getProducto(req.params);
  // console.log(producto);
  res.send(producto);
};

const create = (req, res) => {
  console.log(req.body);
  res.send("Producto creado: " + req.body.nombre);
};

const update = (req, res) => {
  console.log(req.body);
  res.send("Producto modificado: " + req.body.nombre);
};

module.exports = {
  index,
  show,
  create,
  update,
};
