const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim('')
  .split('\n');
const array = input[1].split(' ').map(Number);
const sum = array.reduce((acc, cur) => acc + cur);
const result = sum % 100;
console.log(result);
