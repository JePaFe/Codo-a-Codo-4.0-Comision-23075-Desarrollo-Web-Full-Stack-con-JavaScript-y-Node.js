const model = require("../models/Role");

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

const store = async (body) => {
  const result = await model.store(body);

  if (result.affectedRows > 0) {
    return "Registro creado";
  }

  return result;
};

const update = async (body) => {
  const result = await model.update(body);

  if (result.affectedRows > 0) {
    return "Registro actualizado";
  } else if (result.affectedRows == 0) {
    return "El registro no existe";
  }

  return result;
};

const destroy = async (params) => {
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
