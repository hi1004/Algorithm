const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...scores] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const arr = Array.from(Array(8), (_, i) => i);
const obj = {};
for (const value of arr) {
  obj[value] = 0;
}

let count = 0;
for (let i = 0; i < N; i++) {
  let score = scores[i];
  rangeScore = Math.floor(score / 400) + 1;
  const start = 400 * (rangeScore - 1);
  const end = score < 3200 ? rangeScore * 400 : count++;
  if (start <= score && score < end) {
    obj[rangeScore - 1]++;
  }
}
const answer = Object.values(obj)
  .map(value => (value > 0 ? 1 : 0))
  .reduce((a, b) => a + b, 0);

console.log(answer === 0 ? 1 : answer, answer + count);
