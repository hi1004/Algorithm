const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b, c, x]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

console.log(x <= a ? 1 : a < x && x <= b ? c / (b - a) : 0);
