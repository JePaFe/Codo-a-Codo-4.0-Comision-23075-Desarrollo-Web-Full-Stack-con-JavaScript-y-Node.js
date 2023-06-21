const producto = require("../models/Producto");

const getProducto = (params) => {
  const { id } = params;
  return producto.getProducto(id);
};

module.exports = {
  getProducto,
};
