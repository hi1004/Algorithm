const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[h, w], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const min = Math.min(...a.flat());
console.log(
  a
    .flat()
    .filter(n => n !== min)
    .map(n => n - min)
    .reduce((a, b) => a + b, 0)
);
