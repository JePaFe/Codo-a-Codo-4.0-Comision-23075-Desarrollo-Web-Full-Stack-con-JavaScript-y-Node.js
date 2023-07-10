const { conn } = require("../config/conn");

const findAll = async () => {
  try {
    const [rows] = await conn.query("SELECT * FROM categories");
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
    const [rows] = await conn.query("SELECT * FROM categories WHERE ?", { id });
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const store = async (params) => {
  const { name } = params;
  try {
    const [result] = await conn.query("INSERT INTO categories SET ?", { name });

    return result;
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return "Registro duplicado";
    }

    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const update = async (params) => {
  const { id, name } = params;
  try {
    const [result] = await conn.query("UPDATE categories SET ? WHERE ?", [
      { name },
      { id },
    ]);

    return result;
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return "Registro duplicado";
    }

    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const destroy = async (params) => {
  const { id } = params;
  try {
    const [rows] = await conn.query("DELETE FROM categories WHERE ?", { id });
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

module.exports = {
  findAll,
  findOne,
  store,
  update,
  destroy,
};
