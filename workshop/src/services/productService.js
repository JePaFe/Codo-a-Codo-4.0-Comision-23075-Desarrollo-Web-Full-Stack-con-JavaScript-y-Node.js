const model = require("../models/Product");
const fs = require("fs");

const findAll = async () => {
  const rows = await model.findAll();

  if (rows.length > 0) {
    return rows;
  }

  return "No hay registros";
};

const findOne = async (params) => {
  const row = await model.findOne(params);

  if (row.length > 0) {
    return row[0];
  }

  return "El registro no existe";
};

const store = async (body, file) => {
  const result = await model.store(body, file);

  if (result.affectedRows > 0) {
    return "Registro creado";
  }

  return result;
};

const update = async (body, file) => {
  const row = await model.findOne(body);

  if (file && row[0].image) {
    if (fs.existsSync(`public/uploads/${row[0].image}`)) {
      fs.unlinkSync(`public/uploads/${row[0].image}`);
    }
  }

  body.image = row[0].image;

  if (file) {
    body.image = file.filename;
  }

  const result = await model.update(body);

  if (result.affectedRows > 0) {
    return "Registro actualizado";
  } else if (result.affectedRows == 0) {
    return "El registro no existe";
  }

  return result;
};

const destroy = async (params) => {
  const row = await model.findOne(params);

  if (row[0].image) {
    if (fs.existsSync(`public/uploads/${row[0].image}`)) {
      fs.unlinkSync(`public/uploads/${row[0].image}`);
    }
  }

  const result = await model.destroy(params);

  if (result.affectedRows > 0) {
    return "Registro eliminado";
  }

  return "El registro no existe";
};

module.exports = {
  findAll,
  findOne,
  store,
  update,
  destroy,
};
