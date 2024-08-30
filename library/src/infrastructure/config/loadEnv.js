const fs = require('fs');

/**
 * Função para poder carregar as variáveis de ambiente
 * @param {string} filePath  arquivo para poder ler informações de variáveis de ambiente
 */
function loadEnv(filePath) {
  const envFile = fs.readFileSync(filePath, 'utf8');
  const lines = envFile.split('\n');

  lines.forEach(line => {
    const cleanedLine = line.trim();
    if (cleanedLine && cleanedLine[0] !== '#') {
      const [key, value] = cleanedLine.split('=');
      if (key && value) {
        const clearnedValue = value.replace(/(^['"]|['"]$)/g, '');
        process.env[key] = clearnedValue;
      }
    }
  });
}

module.exports = { loadEnv };