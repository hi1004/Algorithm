const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

const x = input[0].split(' ').map(Number)[1];
const list = input[1].split(' ').map(Number);
const result = list.filter(item => item < x);
console.log(result.join(' '));
