const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b, c, d] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

console.log(a + b > c + d ? 'Left' : a + b < c + d ? 'Right' : 'Balanced');
