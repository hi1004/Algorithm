let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map(Number);

console.log(`${Math.max(...input)}\n${input.indexOf(Math.max(...input)) + 1}`);
