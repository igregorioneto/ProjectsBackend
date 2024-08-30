const { Client } = require('pg');

/**
 * Função para conexão com o banco de dados
 * 
 */
function createConnection() {
  const client = new Client({
    host: 'localhost',
    user: 'your-user',
    password: 'your-password',
    database: 'your-database'
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

module.exports = {
  createConnection
}