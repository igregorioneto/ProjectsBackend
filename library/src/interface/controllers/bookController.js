const authorUseCases = require('../../core/usecases/authorUseCases.js');
const bookUseCases = require('../../core/usecases/bookUseCases.js');

function getBooks(req, res) {
  bookUseCases.getBooks((err, books) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(books));
    }
  });
}

function insertBooks(req, res, title, author_id, published_year, genre) {
  authorUseCases.getAuthorById(author_id, (err, result) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error', success: false }));
      return;
    }

    if (!result || result.rows.length === 0) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Author Not Found', success: false }));
      return;
    }

    bookUseCases.insertBooks(title, author_id, published_year, genre, (err, book) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error', success: false }));
      } else {
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ data: 'Book creating succesfuly', success: true }));
      }
    });
  })
}

module.exports = {
  getBooks,
  insertBooks
}