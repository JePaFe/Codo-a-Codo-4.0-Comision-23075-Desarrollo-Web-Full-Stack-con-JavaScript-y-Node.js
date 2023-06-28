const service = require("../services/userService");
const { validationResult } = require("express-validator");

const index = async (req, res) => {
  const rows = await service.findAll();
  res.render("users", { rows });
};

const show = async (req, res) => {
  const rows = await service.findOne(req.params);
  res.send(rows);
};

const create = (req, res) => {
  res.render("users/create", { values: {} });
};

const store = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("users/create", {
      values: req.body,
      errors: errors.array(),
    });
  }

  const result = await service.store(req.body);
  // res.send(result);
  res.redirect("/users");
};

module.exports = {
  index,
  show,
  create,
  store,
};
