const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b, c] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const r1 = b * 2 + c * 4;
const r2 = a * 2 + c * 2;
const r3 = a * 4 + b * 2;

console.log(Math.min(r1, r2, r3));
