const express = require("express");
const router = express.Router();
const { conn } = require("../../config/conn");

const { body } = require("express-validator");

const validations = [
  body("name")
    .notEmpty()
    .withMessage("El campo es obligatorio")
    .bail()
    .custom((value, { req }) => {
      return new Promise((resolve, reject) => {
        sql = "SELECT * FROM categories WHERE name LIKE ?";
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
    .withMessage("Registro duplicado"),
];

const controller = require("../../controllers/admin/categoryController");

router.get("/create", controller.create);
router.post("/", validations, controller.store);

router.get("/edit/:id", controller.edit);
router.put("/", validations, controller.update);

router.get("/", controller.index);
router.get("/:id", controller.show);

router.delete("/:id", controller.destroy);

module.exports = router;
