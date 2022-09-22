const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
for (let i = 1; i <= n; i++) {
  let arr = input[i].split(' ').map(Number);
  arr.shift();
  const sum = arr.reduce((acc, cur) => acc + cur);
  const avg = sum / arr.length;
  const filterScores = arr.filter(item => item > avg);
  const result = ((filterScores.length / arr.length) * 100).toFixed(3);
  console.log(`${result}%`);
}
