const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b, c, d] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(a * b + c * d);
