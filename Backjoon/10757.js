const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(num => BigInt(num));

console.log((A + B).toString());
