const { Client } = require('pg');

/**
 * Função para conexão com o banco de dados
 * 
 */
function createConnection() {
  const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
  });

  client.connect(err => {
    if (err) {
      console.error('Connection error', err.stack);
    } else {
      console.log('Connected to PostgreSQL');
    }
  })

  return client;
}

function callProcedure(client, procedureName, params, callback) {
  const query = `CALL ${procedureName}(${params.map((_, i) => `$${i + 1}`).join(', ')})`;
  client.query(query, params, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res.rows);
    }
  })
}

module.exports = {
  createConnection,
  callProcedure
}