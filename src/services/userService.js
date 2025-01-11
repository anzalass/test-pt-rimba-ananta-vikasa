const { client } = require("../config/db");

const createUser = async (user) => {
  try {
    const { name, email, age } = user;
    const query = `
    INSERT INTO users (id, name, email, age)
    VALUES (uuid_generate_v4(), $1, $2, $3)
    RETURNING *;
  `;

    const values = [name, email, age];
    const result = await client.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error("Database error");
  }
};

const getUserByID = async (id) => {
  try {
    const query = "SELECT * FROM users WHERE id = $1";

    const result = await client.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error("Database error");
  }
};

const getAllUsers = async () => {
  try {
    const query = "SELECT * FROM users";

    const result = await client.query(query);
    return result.rows;
  } catch (error) {
    throw new Error("Database error");
  }
};

const updateUser = async (id, updatedUser) => {
  try {
    const { name, email, age } = updatedUser;

    const query = `
      UPDATE users
      SET name=$1, email=$2, age=$3
      WHERE id=$4
      RETURNING *;
    `;

    const values = [name, email, age, id];
    const result = await client.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error("Database error");
  }
};

const deleteUser = async (id) => {
  try {
    const query = "DELETE FROM users WHERE id = $1 RETURNING *";
    const result = await client.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error("Database error");
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByID,
  updateUser,
  deleteUser,
};
