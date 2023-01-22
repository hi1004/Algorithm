const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [A, B, C, K] = input[0].split(' ').map(Number);
const [S, T] = input[1].split(' ').map(Number);
let answer = 0;
if (S + T >= K) {
  answer = (A - C) * S + (B - C) * T;
} else {
  answer = A * S + B * T;
}
console.log(answer);
