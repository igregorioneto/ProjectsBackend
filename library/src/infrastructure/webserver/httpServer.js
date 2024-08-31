const http = require('http');
const url = require('url');
const authorController = require('../../interface/controllers/authorControllers.js');

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
      authorController.getAuthors(req, res);
    } else if (path === '/authors' && method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const author = JSON.parse(body);
        authorController.insertAuthors(req, res, author.name, author.birthdate);
      })
    }
  });
}

module.exports = {
  createServer
}