const service = require("../../services/categoryService");
const { validationResult } = require("express-validator");

const index = async (req, res) => {
  const rows = await service.findAll();
  res.render("admin/categories/index", { rows, layout: "layouts/private" });
};

const show = async (req, res) => {
  const row = await service.findOne(req.params);
  res.json(row);
};

const create = (req, res) => {
  res.render("admin/categories/create", { values: {}, layout: "layouts/private" });
};

const store = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/categories/create", {
      values: req.body,
      errors: errors.array(),
      layout: "layouts/private",
    });
  }

  await service.store(req.body);

  res.redirect("/admin/categories");
};

const edit = async (req, res) => {
  const row = await service.findOne(req.params);
  res.render("admin/categories/edit", { values: row, layout: "layouts/private" });
};

const update = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/categories/edit", {
      values: req.body,
      errors: errors.array(),
      layout: "layouts/private",
    });
  }

  await service.update(req.body);

  res.redirect("/admin/categories");
};

const destroy = async (req, res) => {
  await service.destroy(req.params);

  res.redirect("/admin/categories");
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
