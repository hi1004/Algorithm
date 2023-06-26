const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, k], [...p]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
console.log(
  p
    .sort((a, b) => a - b)
    .slice(0, k)
    .reduce((a, b) => a + b)
);
