const { conn } = require("../config/conn");
const bcryptjs = require("bcryptjs");

const login = (req, res) => {
  res.render("auth/login", { values: {}, layout: "layouts/auth" });
};

const postLogin = async (req, res) => {
  const [rows] = await conn.query("SELECT * FROM users WHERE email LIKE ?", [
    req.body.email,
  ]);

  console.log();

  if (rows.length == 0) {
    res.render("auth/login", {
      values: req.body,
      errors: [{ msg: "El correo y/o contraseña son incorrectos" }],
      layout: "layouts/auth",
    });
  } else if (!bcryptjs.compareSync(req.body.password, rows[0].password)) {
    res.render("auth/login", {
      values: req.body,
      errors: [{ msg: "El correo y/o contraseña son incorrectos" }],
      layout: "layouts/auth",
    });
  } else {
    req.session.user_id = rows[0].id;

    res.redirect("/");
  }
};

module.exports = {
  login,
  postLogin,
};
