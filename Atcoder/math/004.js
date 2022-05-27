const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim('')
  .split(' ')
  .map(Number);

const result = input.reduce((acc, cur) => acc * cur);
console.log(result);
