const service = require("../services/userService");

const index = async (req, res) => {
  const rows = await service.findAll();
  res.render("users", { rows });
};

const show = async (req, res) => {
  const rows = await service.findOne(req.params);
  res.send(rows);
};

const create = (req, res) => {
  res.render("users/create");
};

const store = async (req, res) => {
  const result = await service.store(req.body);
  res.send(result);
};

module.exports = {
  index,
  show,
  create,
  store,
};
