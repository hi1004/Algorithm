const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b, k]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const answer = [];
for (let i = 1; i <= Math.max(a, b); i++) {
  if (a % i === 0 && b % i === 0) answer.push(i);
}
console.log(answer.reverse()[k - 1]);
