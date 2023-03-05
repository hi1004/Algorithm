const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...scores] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

scores.sort((a, b) => a - b);

let sum = scores.reduce((a, b) => a + b, 0);

for (let i = 0; i < N; i++) {
  if (sum % 10 !== 0) break;
  else if (sum % 10 === 0 && scores[i] % 10 !== 0) {
    sum -= scores[i];
  }
}
sum = sum % 10 === 0 ? 0 : sum;
console.log(sum);
