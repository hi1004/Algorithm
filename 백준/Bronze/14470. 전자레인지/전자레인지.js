const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b, c, d, e] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

console.log(a <= 0 ? Math.abs(a * c) + d + b * e : (b - a) * e);
