const http = require('http');
const url = require('url');

/**
 * Servidor Http com as rotas
 * @returns http server
 */
function createServer() {
  return http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;

    // Roteamento básico
    if (path === '/authors' && method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Conexão feita com sucesso!', success: true }));
    }
  })
}

module.exports = {
  createServer
}