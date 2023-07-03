const model = require("../models/User");
const bcryptjs = require("bcryptjs");

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

const store = async (body) => {
  body.password = await bcryptjs.hash(body.password, 8);

  const result = await model.store(body);

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
