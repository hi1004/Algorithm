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
const A = a
  .toString()
  .split('')
  .map(v => +v)
  .reduce((c, d) => c + d, 0);
const B = b
  .toString()
  .split('')
  .map(v => +v)
  .reduce((c, d) => c + d, 0);

console.log(Math.max(A, B));
