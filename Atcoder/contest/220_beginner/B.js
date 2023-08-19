const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[k], [a, b]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
a = parseInt(a, k);
b = parseInt(b, k);
console.log(a * b);
