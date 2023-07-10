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

const store = async (params, file) => {
  let image = null;

  if (file) {
    image = file.filename;
  }
  const { name, description, category_id } = params;
  try {
    const [result] = await conn.query("INSERT INTO products SET ?", {
      name,
      description,
      category_id,
      image,
    });

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
  const { id, name, description, category_id, image } = params;
  try {
    const [result] = await conn.query("UPDATE products SET ? WHERE ?", [
      { name, description, category_id, image },
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
    const [rows] = await conn.query("DELETE FROM products WHERE ?", { id });
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
