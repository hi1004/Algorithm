const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .split(' ')
  .map(Number);
console.log(input[0] + input[1]);
