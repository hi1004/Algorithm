const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = input.shift();
const nums = input[0]
  .split(' ')
  .map(Number)
  .filter(num => num !== 0);

const sum = nums.reduce((a, b) => a + b);
console.log(Math.ceil(sum / nums.length));
