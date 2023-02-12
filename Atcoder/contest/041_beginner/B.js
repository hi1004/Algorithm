const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [A, B, C] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(BigInt);
const x = A * B * C;
const answer = (x % BigInt(10 ** 9 + 7)).toString();
console.log(answer);
