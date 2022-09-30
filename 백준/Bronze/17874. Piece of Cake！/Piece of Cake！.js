const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, h, v] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(Math.max(n - h, h) * Math.max(n - v, v) * 4);

