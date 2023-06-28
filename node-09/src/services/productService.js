const model = require("../models/Product");

const findAll = async () => {
  return model.findAll();
};

const findOne = async (params) => {
  const rows = await model.findOne(params);

  if (rows.length > 0) {
    return rows[0];
  }

  return "No existe el registro";
};

const store = async (body, file) => {
  const result = await model.store(body, file);

  if (result.affectedRows > 0) {
    return "Registro creado";
  }

  return result;
};

module.exports = {
  findAll,
  findOne,
  store,
};
