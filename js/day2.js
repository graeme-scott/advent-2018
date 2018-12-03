const helpers = require('./helpers');

const data = helpers.getData('day2');

function part1() {
  let twice = 0;
  let thrice = 0;

  for (let i = 0; i < data.length; i++) {
    const letters = [];
    const count = [];
    const id = data[i];

    for (let o = 0; o < id.length; o++) {
      if (letters[id[o]] > 0) {
        letters[id[o]] = letters[id[o]] + 1;
        count.push(letters[id[o]]);
      } else {
        letters[id[o]] = 1;
      }
    }

    if (count.indexOf(2) !== -1) {
      twice++;
    }

    if (count.indexOf(3) !== -1) {
      thrice++;
    }
  }

  return twice * thrice;
}

console.log(`Part 1: ${part1()}`);
