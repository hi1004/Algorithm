const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [S, T, D] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log((D / (S * 2)) * T);
