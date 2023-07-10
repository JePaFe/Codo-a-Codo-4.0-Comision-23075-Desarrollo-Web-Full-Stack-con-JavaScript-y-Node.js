const { conn } = require("../config/conn");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const service = require("../services/userService");

const register = (req, res) => {
  return res.render("auth/register", {
    values: req.body,
    layout: "layouts/auth",
  });
};

const postRegister = async (req, res) => {
  const errors = validationResult(req);
  console.log(errors.isEmpty());
  if (!errors.isEmpty()) {
    return res.render("auth/register", {
      values: req.body,
      errors: errors.array(),
      layout: "layouts/auth",
    });
  }

  const result = await service.store(req.body);

  await service.setRole({
    user_id: result.insertId,
    role_id: 68,
  });

  res.redirect("/");
};

const login = (req, res) => {
  res.render("auth/login", { values: {}, layout: "layouts/auth" });
};

const postLogin = async (req, res) => {
  const [rows] = await conn.query("SELECT * FROM users WHERE email LIKE ?", [
    req.body.email,
  ]);

  if (rows.length == 0) {
    res.render("auth/login", {
      values: req.body,
      errors: [{ msg: "El correo y/o contraseña son incorrectos" }],
      layout: "layouts/auth",
    });
  } else if (!(await bcryptjs.compare(req.body.password, rows[0].password))) {
    res.render("auth/login", {
      values: req.body,
      errors: [{ msg: "El correo y/o contraseña son incorrectos" }],
      layout: "layouts/auth",
    });
  } else {
    req.session.user_id = rows[0].id;

    const role = await service.hasRole({ user_id: rows[0].id, role_id: 69 }); // Role Admin

    if (role.length > 0) {
      return res.redirect("/admin");
    }

    res.redirect("/");
  }
};

module.exports = {
  register,
  postRegister,
  login,
  postLogin,
};
