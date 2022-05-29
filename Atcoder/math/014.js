let [N] = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

let answer = [];

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
