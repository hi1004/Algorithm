const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const numbers = input[1].split('').map(Number);
const result = numbers.reduce((acc, cur) => acc + cur);
console.log(result);
