INSERT INTO `productos` (`id`, `nombre`, `descripcion`) 
    VALUES (NULL, 'Producto Nro 4', 'Descripción Producto Nro 4');

INSERT INTO `productos` VALUES (NULL, 'Producto Nro 2', 'Descripción Producto Nro 2');

INSERT INTO `productos` (`descripcion`, `nombre`) 
    VALUES ('Descripción Producto Nro 3', 'Producto Nro 3');

---

INSERT INTO `productos` (`nombre`, `descripcion`) 
    VALUES ('Producto Nro 5', 'Descripción Producto Nro 5'),
            ('Producto Nro 6', 'Descripción Producto Nro 6');

---

SELECT id, nombre FROM `productos`;

SELECT id, nombre FROM `productos` WHERE id = 2;
SELECT id, nombre FROM `productos` WHERE id != 5;
SELECT * FROM `productos` WHERE id > 2 LIMIT 2;

SELECT * FROM `productos` ORDER BY `precio` DESC;

---

UPDATE `productos` SET `nombre` = 'Producto Nro 7' WHERE `productos`.`id` = 6;

---

DELETE FROM productos WHERE `productos`.`id` = 3

---

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `categoria_id`) 
    VALUES (NULL, 'Producto Nro 1', 'Descripción Producto Nro 1', 2);