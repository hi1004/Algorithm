const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, r]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

console.log(n < 10 ? r + 100 * (10 - n) : r);
