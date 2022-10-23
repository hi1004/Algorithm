const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let [N, K] = line;

for (let i = 0; i <= K; i++) {
  N = Math.round(N / 10 ** i) * 10 ** i;
}
console.log(N);
