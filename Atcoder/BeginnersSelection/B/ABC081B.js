const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

let A = input[1].split(' ').map(Number);
let count = 0;

while (A.every(n => n % 2 === 0)) {
  count++;
  A = A.map(n => n / 2);
}

console.log(count);
