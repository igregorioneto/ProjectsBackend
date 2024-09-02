const bookUseCases = require('../../core/usecases/bookUseCases.js');

function getBooks(req, res) {
  bookUseCases.getBooks((err, books) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    } else {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(books));
    }
  });
}

function insertBooks(req, res, title, author_id, published_year, genre) {
  bookUseCases.insertBooks(title, author_id, published_year, genre, (err, book) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    } else {
      res.writeHead(201, { 'Content-Type': 'application/json' })/
      res.end(JSON.stringify(book));
    }
  });
}

module.exports = {
  getBooks,
  insertBooks
}