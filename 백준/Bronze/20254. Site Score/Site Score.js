const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [UR, TR, UO, TO] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(56 * UR + 24 * TR + 14 * UO + 6 * TO);
