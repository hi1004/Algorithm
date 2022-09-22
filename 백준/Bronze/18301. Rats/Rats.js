const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n1, n2, n12] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const answer = Math.floor(((n1 + 1) * (n2 + 1)) / (n12 + 1)) - 1;
console.log(answer);
