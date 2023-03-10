const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...A] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let left = A.reduce((a, b) => a + b, 0);
let right = 0;
let answer = Infinity;
for (let i = 1; i < N; i++) {
  left -= A[N - i];
  right += A[N - i];
  let temp = Math.abs(left - right);

  if (temp < answer) {
    answer = temp;
  }
}
console.log(answer);
