const bookRepository = require('../../infrastructure/database/bookRepository.js');

function getBooks(callback) {
  bookRepository.getBooks(callback);
}

function insertBooks(title, author_id, published_year, genre, callback) {
  bookRepository.insertBooks(title, author_id, published_year, genre, callback);
}

module.exports ={
  getBooks,
  insertBooks
}