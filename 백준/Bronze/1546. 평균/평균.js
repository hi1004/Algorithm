const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const scores = input[1].split(' ').map(Number);
const M = Math.max(...scores);
let sum = 0;
scores.forEach(item => {
  sum += (item / M) * 100;
});
const result = sum / n;
console.log(result);
