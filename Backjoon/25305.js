const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file, 'utf8').trim().split('\n');

const [n, k] = input.shift().split(' ').map(Number);

const numbers = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
console.log(numbers[k - 1]);
