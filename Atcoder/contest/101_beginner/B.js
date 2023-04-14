const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
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
  n %
    String(n)
      .split('')
      .map(n => Number(n))
      .reduce((a, b) => a + b, 0) ===
    0
    ? 'Yes'
    : 'No'
);
