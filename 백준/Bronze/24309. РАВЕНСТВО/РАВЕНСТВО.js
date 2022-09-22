const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b, c] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(BigInt);

const x = (b - c) / a;
console.log(x.toString());
