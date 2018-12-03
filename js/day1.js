const helpers = require('./helpers');

const data = helpers.getData('day1');

function part1() {
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    if (parseInt(data[i])) {
      total += parseInt(data[i]);
    }
  }

  return total;
}

function part2() {
  const previous = [];
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    if (previous.includes(total)) {
      return previous[previous.indexOf(total)];
    }

    if (parseInt(data[i])) {
      total += parseInt(data[i]);
    }

    previous.push(total);
  }
}

console.log(`Part 1: ${part1()}`);
console.log(`Part 2: ${part2()}`);
