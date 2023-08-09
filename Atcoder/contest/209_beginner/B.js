const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, x], [...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const sum = a
  .map((v, i) => ((i + 1) % 2 === 0 ? v - 1 : v))
  .reduce((a, b) => a + b, 0);
console.log(sum <= x ? 'Yes' : 'No');
