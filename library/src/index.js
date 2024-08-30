const path = require('path');
const { loadEnv } = require('./infrastructure/config/loadEnv.js');

loadEnv(path.join(__dirname, '..', 'app.conf'));

console.log(process.env.PORT);
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.DB_PASS);
console.log(process.env.DB_PORT);