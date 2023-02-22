const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B, C, D] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
console.log(Math.max(A * B, C * D));
