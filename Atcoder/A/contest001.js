const input = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split('\n')
  .map(Number);

const [a, b] = input;

console.log(a - b);
