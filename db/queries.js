const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertNewMessage({ text, user }) {
  await pool.query("INSERT INTO messages (text, \"user\") VALUES ($1, $2)", [text, user]);
}

async function getMessageById(id) {
    const res = await pool.query('SELECT * FROM messages WHERE id = $1', [id]);
    return res.rows[0];
};

module.exports = {
  getAllMessages,
  insertNewMessage,
  getMessageById,
};