const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b, c] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const min = Math.min(a, b);
console.log(Math.floor(c / min));
