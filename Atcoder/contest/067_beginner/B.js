const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B, ...arr] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

arr.sort((a, b) => b - a);
console.log(arr.slice(0, B).reduce((a, b) => a + b, 0));
