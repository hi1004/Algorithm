const [N] = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

let answer = [];
for (let i = 1; i * i <= N; i++) {
  if (N % i === 0) {
    answer.push(i);
    answer.push(N / i);
  }
}
answer
  .sort((a, b) => a - b)
  .filter((v, i) => answer.indexOf(v) === i)
  .forEach(el => {
    console.log(el);
  });
