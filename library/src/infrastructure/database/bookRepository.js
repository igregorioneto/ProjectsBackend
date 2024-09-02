const db = require('./postgres.js');
const client = db.createConnection();

function getBooks(callback) {
  return client.query('SELECT * FROM "Books";', (err, results) => {
    if (err) callback(err, null);
    callback(null, results);
  });
}

function insertBooks(title, author_id, published_year, genre, callback) {
  db.callProcedure(client, 'insert_books', [title, author_id, published_year, genre], callback);
}

module.exports = {
  getBooks,
  insertBooks
}