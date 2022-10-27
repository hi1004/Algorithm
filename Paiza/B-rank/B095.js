const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const [N, M] = line[0].split(' ').map(Number);
const arr = line.slice(1, M + 1).map(n => Number(n));
const h = line.slice(M + 1).map(n => Number(n));

let count = 0;
let score = 100;
let res = [];
for (let i = 0; i < M * N; i++) {
  if (count === M) {
    count = 0;
    res.push(score < 0 ? 0 : score);
    score = 100;
  }
  const Hz = Math.abs(arr[count] - h[i]);
  count++;

  if (Hz <= 5) {
    continue;
  }

  if (Hz <= 10) {
    score--;
  } else if (Hz <= 20) {
    score -= 2;
  } else if (Hz <= 30) {
    score -= 3;
  } else {
    score -= 5;
  }
}
res.push(score < 0 ? 0 : score);

console.log(Math.max(...res));
