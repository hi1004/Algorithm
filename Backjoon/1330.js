const [a, b] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

const answer = a > b ? '>' : a < b ? '<' : a === b ? '==' : '';
console.log(answer);
