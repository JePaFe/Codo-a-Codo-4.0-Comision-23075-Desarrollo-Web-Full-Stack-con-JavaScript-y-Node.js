const service = require("../../services/roleService");
const { validationResult } = require("express-validator");

const index = async (req, res) => {
  const rows = await service.findAll();
  res.render("admin/roles/index", { rows, layout: "layouts/private" });
};

const show = async (req, res) => {
  const row = await service.findOne(req.params);
  res.json(row);
};

const create = (req, res) => {
  res.render("admin/roles/create", { values: {}, layout: "layouts/private" });
};

const store = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/roles/create", {
      values: req.body,
      errors: errors.array(),
      layout: "layouts/private",
    });
  }

  await service.store(req.body);

  res.redirect("/admin/roles");
};

const edit = async (req, res) => {
  const row = await service.findOne(req.params);
  res.render("admin/roles/edit", { values: row, layout: "layouts/private" });
};

const update = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/roles/edit", {
      values: req.body,
      errors: errors.array(),
      layout: "layouts/private",
    });
  }

  await service.update(req.body);

  res.redirect("/admin/roles");
};

const destroy = async (req, res) => {
  await service.destroy(req.params);

  res.redirect("/admin/roles");
};

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
