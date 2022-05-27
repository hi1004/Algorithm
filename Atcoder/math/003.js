const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim('')
  .split('\n');
const array = input[1].split(' ').map(Number);

const result = array.reduce((acc, cur) => acc + cur);
console.log(result);
