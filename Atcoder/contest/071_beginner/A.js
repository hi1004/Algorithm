const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x, a, b] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
console.log(Math.abs(x - a) > Math.abs(x - b) ? 'B' : 'A');
