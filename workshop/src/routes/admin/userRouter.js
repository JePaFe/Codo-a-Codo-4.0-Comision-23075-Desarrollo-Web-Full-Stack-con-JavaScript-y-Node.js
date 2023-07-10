const express = require("express");
const router = express.Router();
const { conn } = require("../../config/conn");

const { body } = require("express-validator");

const validations = [
  body("email")
    .isEmail()
    .withMessage("Ingrese una dirección de correo electrónico válida")
    .bail()
    .custom((value, { req }) => {
      return new Promise((resolve, reject) => {
        sql = "SELECT * FROM users WHERE email = ?";
        wheres = [value];

        if (req.body.id) {
          sql += " AND id != ?";
          wheres.push(req.body.id);
        }

        conn.query(sql, wheres).then((row) => {
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
    .withMessage("La contraseña debe tener ..."),
];

const roleValidations = [
  body("role_id").notEmpty().withMessage("El Role es obligatorio"),
];

const controller = require("../../controllers/admin/userController");

router.get("/create", controller.create);
router.post("/", validations, controller.store);

router.get("/edit/:id", controller.edit);
router.put("/", validations, controller.update);

router.get("/", controller.index);
router.get("/:id", controller.show);

router.delete("/:id", controller.destroy);

router.get("/roles/:user_id", controller.roles);
router.get("/roles/create/:user_id", controller.roleCreate);

router.post("/roles/store/:user_id", roleValidations, controller.roleStore);
router.delete("/roles/:role_id/:user_id", controller.roleDestroy);

module.exports = router;
