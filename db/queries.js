const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertNewMessage(message) {
  await pool.query("INSERT INTO messages (message) VALUES ($1)", [message]);
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
