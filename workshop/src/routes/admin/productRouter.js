const express = require("express");
const router = express.Router();
const { conn } = require("../../config/conn");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname),
});
const uploadFile = multer({ storage });

const { body } = require("express-validator");

const productValidations = [
  body("name")
    .notEmpty()
    .withMessage("El campo nombre es obligatorio")
    .bail()
    .custom((value, { req }) => {
      return new Promise((resolve, reject) => {
        sql = "SELECT * FROM products WHERE name LIKE ?";
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
  body("description")
    .notEmpty()
    .withMessage("El campo descripción es obligatorio"),
  body("category_id")
    .notEmpty()
    .withMessage("El campo categoría es obligatorio"),
];

const controller = require("../../controllers/admin/productController");

router.get("/create", controller.create);
router.post(
  "/",
  uploadFile.single("image"),
  productValidations,
  controller.store
);

router.get("/edit/:id", controller.edit);
router.put(
  "/",
  uploadFile.single("image"),
  productValidations,
  controller.update
);

router.get("/", controller.index);
router.get("/:id", controller.show);

router.delete("/:id", controller.destroy);

module.exports = router;
