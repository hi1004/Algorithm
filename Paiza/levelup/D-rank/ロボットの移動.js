const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [x, y] = input
  .shift()
  .split(' ')
  .map(n => Math.abs(n));

console.log(x + y);
