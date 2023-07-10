const service = require("../../services/productService");
const categoryService = require("../../services/categoryService");
const { validationResult } = require("express-validator");

const index = async (req, res) => {
  const rows = await service.findAll();
  res.render("admin/products/index", { rows, layout: "layouts/private" });
};

const show = async (req, res) => {
  const row = await service.findOne(req.params);
  res.json(row);
};

const create = async (req, res) => {
  const categories = await categoryService.findAll();

  res.render("admin/products/create", {
    values: {},
    categories,
    layout: "layouts/private",
  });
};

const store = async (req, res) => {
  const categories = await categoryService.findAll();
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/products/create", {
      values: req.body,
      categories,
      errors: errors.array(),
      layout: "layouts/private",
    });
  }

  await service.store(req.body, req.file);

  res.redirect("/admin/products");
};

const edit = async (req, res) => {
  const categories = await categoryService.findAll();
  const row = await service.findOne(req.params);
  res.render("admin/products/edit", {
    values: row,
    categories,
    layout: "layouts/private",
  });
};

const update = async (req, res) => {
  const categories = await categoryService.findAll();
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/products/edit", {
      values: req.body,
      categories,
      errors: errors.array(),
      layout: "layouts/private",
    });
  }

  await service.update(req.body, req.file);

  res.redirect("/admin/products");
};

const destroy = async (req, res) => {
  await service.destroy(req.params);

  res.redirect("/admin/products");
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
