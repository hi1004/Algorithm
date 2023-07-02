const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, x, t]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const result = Math.ceil(n / x) * t;
console.log(result);
