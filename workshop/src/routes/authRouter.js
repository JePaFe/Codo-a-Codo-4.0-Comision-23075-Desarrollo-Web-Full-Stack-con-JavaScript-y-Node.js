const express = require("express");
const router = express.Router();
const { conn } = require("../config/conn");

const { body } = require("express-validator");

const registerValidations = [
  body("email")
    .isEmail()
    .withMessage("Ingrese una dirección de correo electrónico válida")
    .bail()
    .custom((value, { req }) => {
      return new Promise((resolve, reject) => {
        console.log(value, req.body);
        sql = "SELECT * FROM users WHERE email = ?";
        wheres = [value];

        conn.query(sql, wheres).then((row) => {
          console.log(row, row[0].length);
          if (row[0].length != 0) {
            return reject();
          }
          return resolve();
        });
      });
    })
    .withMessage("Dirección de correo electrónico duplicada"),
  body("password")
    .isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage("La contraseña debe tener ...")
    .bail()
    .custom((value, { req }) => value === req.body.password_confirmation)
    .withMessage("Las contraseñas no coinciden"),
];

const forgotValidations = [
  body("email")
    .isEmail()
    .withMessage("Ingrese una dirección de correo electrónico válida"),
];

const resetValidations = [
  body("password")
    .isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage("La contraseña debe tener ...")
    .bail()
    .custom((value, { req }) => value === req.body.password_confirmation)
    .withMessage("Las contraseñas no coinciden"),
];

const controller = require("../controllers/authController");

router.get("/register", controller.register);
router.post("/register", registerValidations, controller.postRegister);

router.get("/login", controller.login);
router.post("/login", controller.postLogin);

router.get("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

// router.get("/forgot", controller.forgot);
// router.post("/forgot", forgotValidations, controller.postForgot);

// router.get("/reset", controller.reset);
// router.post("/reset/:id/:token", controller.postReset);

module.exports = router;
