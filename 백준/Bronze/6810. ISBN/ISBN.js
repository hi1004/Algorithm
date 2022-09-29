const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b, c] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const num = a * 1 + b * 3 + c * 1;

const ans = 91 + num;
console.log(`The 1-3-sum is ${ans}`);
