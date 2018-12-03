const fs = require('fs');

function getData(path) {
  return fs.readFileSync(`data/${path}`, 'utf-8').split('\n')
}

module.exports = {
  getData
};
