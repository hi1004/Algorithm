const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b]] = require('fs')
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
for (let i = 1; i <= b; i++) {
  if (b === 100) b++;
  answer.push(i * 100 ** a);
}
console.log(answer[b - 1]);
