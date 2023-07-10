const { conn } = require("../config/conn");

const findAll = async () => {
  try {
    const [rows] = await conn.query("SELECT * FROM profiles");
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
    const [rows] = await conn.query("SELECT * FROM profiles WHERE ?", { id });
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const store = async (params) => {
  const { first_name, last_name, user_id } = params;
  try {
    const [result] = await conn.query("INSERT INTO profiles SET ?", {
      first_name,
      last_name,
      user_id,
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
  const { id, first_name, last_name, user_id } = params;
  try {
    const [result] = await conn.query("UPDATE profiles SET ? WHERE ?", [
      {
        first_name,
        last_name,
        user_id,
      },
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
    const [rows] = await conn.query("DELETE FROM profiles WHERE ?", { id });
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
