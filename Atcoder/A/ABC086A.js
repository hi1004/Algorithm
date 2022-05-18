const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ');
const a = input[0];
const b = input[1];
const num = a * b;
(function solution() {
  const result = num % 2 === 0 ? 'Even' : 'Odd';
  console.log(result);
})();
