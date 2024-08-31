const db = require('./postgres.js');
const client = db.createConnection(); 

function getAuthors(callback) {
  client.query('SELECT * FROM "Authors";', (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
}

function insertAuthors(name, birthdate,callback) {
  db.callProcedure(client, 'insert_authors', [name, birthdate], callback);
}

module.exports = {
  getAuthors,
  insertAuthors
}