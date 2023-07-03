const { conn } = require("../config/conn");

const findAll = async () => {
  try {
    const [rows] = await conn.query("SELECT * FROM products");
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const findOne = async (params) => {
  const { id } = params;
  try {
    const [rows] = await conn.query("SELECT * FROM products WHERE ?", { id });
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const store = async (body, file) => {
  // console.log(file);
  const { filename } = file;
  const { name, description } = body;
  try {
    const [rows] = await conn.query("INSERT INTO products SET ?", {
      name,
      description,
      image: filename,
    });
    return rows;
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return "Registro duplicado";
    }

    throw error;
  } finally {
    conn.releaseConnection();
  }
};

module.exports = {
  findAll,
  findOne,
  store,
};
