const service = require("../services/roleService");
const { validationResult } = require("express-validator");

const index = async (req, res) => {
  const rows = await service.findAll();
  res.render("roles", { rows });
};

const show = async (req, res) => {
  const rows = await service.findOne(req.params);
  res.send(rows);
};

const create = (req, res) => {
  res.render("roles/create");
};

const store = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("roles/create", {
      values: req.body,
      errors: errors.array(),
    });
  }

  const result = await service.store(req.body);
  // res.send(result);
  res.redirect("/roles");
};

const edit = async (req, res) => {
  const row = await service.findOne(req.params);
  res.render("roles/edit", { values: row });
};

const update = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("roles/edit", {
      values: req.body,
      errors: errors.array(),
    });
  }

  await service.update(req.body);

  res.redirect("/roles");
};

const destroy = async (req, res) => {
  await service.destroy(req.params);

  res.redirect("/roles");
};

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy
};
