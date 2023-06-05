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

console.log(
  k - a <= 0
    ? [a - k, b].join(' ')
    : [0, b - (k - a) <= 0 ? 0 : b - (k - a)].join(' ')
);
