const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ')
  .map(Number);
const [m, p, q] = input;
const toSell = m * (p / 100);
const rest = m - toSell;
const result = rest - rest * (q / 100);
console.log(result);
