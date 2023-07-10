const service = require("../../services/userService");
const roleService = require("../../services/roleService");
const { validationResult } = require("express-validator");

const index = async (req, res) => {
  const rows = await service.findAll();
  res.render("admin/users/index", { rows, layout: "layouts/private" });
};

const show = async (req, res) => {
  const row = await service.findOne(req.params);
  res.json(row);
};

const create = async (req, res) => {
  res.render("admin/users/create", {
    values: {},
    layout: "layouts/private",
  });
};

const store = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/users/create", {
      values: req.body,
      errors: errors.array(),
      layout: "layouts/private",
    });
  }

  await service.store(req.body);

  res.redirect("/admin/users");
};

const edit = async (req, res) => {
  const row = await service.findOne(req.params);

  res.render("admin/users/edit", {
    values: row,
    layout: "layouts/private",
  });
};

const update = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/users/edit", {
      values: req.body,
      errors: errors.array(),
      layout: "layouts/private",
    });
  }

  await service.update(req.body);

  res.redirect("/admin/users");
};

const destroy = async (req, res) => {
  // TODO: eliminar roles del usuario
  await service.destroy(req.params);
  res.redirect("/admin/users");
};

const roles = async (req, res) => {
  const roles = await service.roles(req.params);
  const user = await service.findOne({ id: req.params.user_id });
  res.render("admin/users/roles", { roles, user, layout: "layouts/private" });
};

const roleCreate = async (req, res) => {
  const roles = await roleService.findAll();
  const user = await service.findOne({ id: req.params.user_id });
  res.render("admin/users/setRole", {
    values: {},
    roles,
    user,
    layout: "layouts/private",
  });
};

const roleStore = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const roles = await roleService.findAll();
    const user = await service.findOne({ id: req.params.user_id });
    res.render("admin/users/setRole", {
      values: req.body,
      roles,
      user,
      errors: errors.array(),
      layout: "layouts/private",
    });
  }

  const result = await service.setRole({
    user_id: req.params.user_id,
    role_id: req.body.role_id,
  });

  res.redirect(`/admin/users/roles/${req.params.user_id}`);
};

const roleDestroy = async (req, res) => {
  await service.roleDestroy(req.params);
  res.redirect(`/admin/users/roles/${req.params.user_id}`);
};

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  roles,
  roleCreate,
  roleStore,
  roleDestroy,
};
