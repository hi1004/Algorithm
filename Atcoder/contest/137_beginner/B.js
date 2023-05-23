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
const answer = new Set();
for (let i = 1; i <= a; i++) {
  for (let j = 0; j < a; j++) {
    answer.add(b - a + i + j);
  }
}
console.log([...answer].join(' '));
