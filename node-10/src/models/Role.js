const { conn } = require("../config/conn");

const findAll = async () => {
  try {
    const [rows] = await conn.query("SELECT * FROM roles");
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
    const [rows] = await conn.query("SELECT * FROM roles WHERE ?", { id });
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const store = async (body) => {
  const { name } = body;
  try {
    const [rows] = await conn.query("INSERT INTO roles SET ?", {
      name,
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

const update = async (params) => {
  const { id, name } = params;
  try {
    const [result] = await conn.query("UPDATE roles SET ? WHERE ?", [
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
    const [rows] = await conn.query("DELETE FROM roles WHERE ?", { id });
    return rows;
  } catch (error) {
    if (error.code === "ER_ROW_IS_REFERENCED_2") {
      return "FOREIGN KEY";
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
  update,
  destroy,
};
