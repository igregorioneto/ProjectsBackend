const useRepository = require('../../infrastructure/database/authorRepository.js');

function getAuthors(callback) {
  useRepository.getAuthors(callback);
}

function insertAuthors(name, birthdate, callback) {
  useRepository.insertAuthors(name, birthdate, callback);
}

module.exports = {
  getAuthors,
  insertAuthors
}