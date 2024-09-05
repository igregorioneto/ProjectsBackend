const authorRepository = require('../../infrastructure/database/authorRepository.js');

function getAuthors(callback) {
  authorRepository.getAuthors(callback);
}

function getAuthorById(id, callback) {
  authorRepository.getAuthorById(id, callback);
}

function insertAuthors(name, birthdate, callback) {
  authorRepository.insertAuthors(name, birthdate, callback);
}

module.exports = {
  getAuthors,
  insertAuthors,
  getAuthorById
}