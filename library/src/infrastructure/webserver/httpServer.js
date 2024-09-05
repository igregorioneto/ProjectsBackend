const http = require('http');
const url = require('url');
const authorController = require('../../interface/controllers/authorControllers.js');
const bookController = require('../../interface/controllers/bookController.js');
/**
 * Servidor Http com as rotas
 * @returns http server
 */
function createServer() {
  return http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathParsed = parsedUrl.pathname.split('/')
    const method = req.method;
    const path = pathParsed[1];

    // Roteamento básico
    if (path === 'authors' && method === 'GET' && pathParsed.length === 2) {
      authorController.getAuthors(req, res);
    } else if (path === 'authors' && method === 'GET' && pathParsed.length === 3) {
      const id = parseInt(pathParsed[2]);
      authorController.getAuthorById(req, res, id);
    } else if (path === 'authors' && method === 'POST' && pathParsed.length === 2) {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const author = JSON.parse(body);
        authorController.insertAuthors(req, res, author.name, author.birthdate);
      })
    } else if(path === 'books' && method === 'GET' && pathParsed.length === 2) {
      bookController.getBooks(req, res);
    } else if (path === 'books' && method === 'POST' && pathParsed.length === 2) {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const book = JSON.parse(body);
        bookController.insertBooks(req, res, book.title, book.author_id, book.published_year, book.genre)
      })
    }
  });
}

module.exports = {
  createServer
}