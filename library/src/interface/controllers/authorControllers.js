const authorUseCases = require('../../core/usecases/authorUseCases.js');

function getAuthors(req, res) {
  authorUseCases.getAuthors((err, authors) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error', success: false }));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ data: authors.rows, success: true }));
    }
  });
}

function getAuthorById(req, res, id) {
  authorUseCases.getAuthorById(id, (err, author) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error', success: false }));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ data: author.rows, success: true }));
    }
  })
}

function insertAuthors(req, res, name, birthdate) {
  authorUseCases.insertAuthors(name, birthdate,(err, author) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error', success: false }));
    } else {
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ data: author.rows , success: true}));
    }
  });
}

module.exports = {
  getAuthors,
  insertAuthors,
  getAuthorById
}