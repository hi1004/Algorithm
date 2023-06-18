const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m], [...x]] = require('fs')
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
  n - x.reduce((v1, v2) => v1 + v2) < 0 ? -1 : n - x.reduce((v1, v2) => v1 + v2)
);
