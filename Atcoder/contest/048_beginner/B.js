const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b, x] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(BigInt);
console.log(String((b + x) / x - (a - 1n + x) / x));
