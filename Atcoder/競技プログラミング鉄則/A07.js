const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const D = Number(input.shift());
const N = Number(input.shift());
const days = input.slice().map(day => day.split(' ').map(Number));

const B = Array.from({ length: D }).fill(0);
for (let i = 0; i < N; i++) {
  const [L, R] = days[i];
  B[L - 1] += 1;
  B[R] -= 1;
}

const S = [];
S[0] = 0;
for (let i = 1; i <= D; i++) {
  S[i] = S[i - 1] + B[i - 1];
}
for (let i = 1; i <= D; i++) {
  console.log(S[i]);
}
