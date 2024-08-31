const path = require('path');
const { loadEnv } = require('./infrastructure/config/loadEnv.js');
const { createServer } = require('./infrastructure/webserver/httpServer.js');

loadEnv(path.join(__dirname, '..', 'app.conf'));

const server = createServer();

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Server running on port ' + port);
})