const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b, c] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
let answer = 0;
for (let i = 1; i <= a; i++) {
  const sum = String(i)
    .split('')
    .reduce((a, b) => Number(a) + Number(b));
  if (b <= sum && sum <= c) {
    answer += i;
  }
}
console.log(answer);
