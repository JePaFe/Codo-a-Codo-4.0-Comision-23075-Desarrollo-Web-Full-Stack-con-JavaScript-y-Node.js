const service = require("../services/productService");

const index = async (req, res) => {
  const rows = await service.findAll();
  res.render("products", { rows });
};

const show = async (req, res) => {
  const rows = await service.findOne(req.params);
  res.send(rows);
};

const create = (req, res) => {
  res.render("products/create");
};

const store = async (req, res) => {
  const result = await service.store(req.body, req.file);
  res.send(result);
};

module.exports = {
  index,
  show,
  create,
  store,
};
