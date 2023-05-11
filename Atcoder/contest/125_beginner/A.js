const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b, t]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

console.log(Math.floor(t / a) * b);
