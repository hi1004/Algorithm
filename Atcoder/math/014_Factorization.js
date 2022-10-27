const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const answer = [];
for (let i = 2; i <= Math.sqrt(N); i++) {
  while (N % i === 0) {
    answer.push(i);
    N = N / i;
  }
}
if (N > 2) {
  answer.push(N);
}
console.log(answer.join(' '));
