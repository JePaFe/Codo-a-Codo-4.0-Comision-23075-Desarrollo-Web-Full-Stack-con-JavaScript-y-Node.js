const { conn } = require("../config/conn");

const findAll = async () => {
  try {
    const [rows] = await conn.query("SELECT id, email FROM users");
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
    const [rows] = await conn.query("SELECT id, email FROM users WHERE ?", {
      id,
    });
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const store = async (params) => {
  const { email, password } = params;
  try {
    const [result] = await conn.query("INSERT INTO users SET ?", {
      email,
      password,
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
  const { id, email, password } = params;
  try {
    const [result] = await conn.query("UPDATE users SET ? WHERE ?", [
      {
        email,
        password,
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
    const [rows] = await conn.query("DELETE FROM users WHERE ?", { id });
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const roles = async (params) => {
  const { user_id } = params;
  try {
    const [rows] = await conn.query(
      `SELECT roles.id AS role_id, roles.name, users.id AS user_id, users.email
        FROM roles
        INNER JOIN role_user ON role_user.role_id = roles.id
        INNER JOIN users on users.id = role_user.user_id 
        WHERE role_user.user_id = ?`,
      [user_id]
    );
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const setRole = async (params) => {
  const { user_id, role_id } = params;
  try {
    const [result] = await conn.query("INSERT INTO role_user SET ?", {
      user_id,
      role_id,
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

const roleDestroy = async (params) => {
  const { role_id } = params;
  try {
    const [rows] = await conn.query("DELETE FROM role_user WHERE ?", {
      role_id,
    });
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const hasRole = async (params) => {
  const { user_id, role_id } = params;
  try {
    const [rows] = await conn.query(
      "SELECT * FROM role_user WHERE user_id = ? AND role_id = ?",
      [user_id, role_id]
    );
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
  roles,
  setRole,
  roleDestroy,
  hasRole,
};
