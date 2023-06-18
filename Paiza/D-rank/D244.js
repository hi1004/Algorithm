const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[x], [y]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
console.log(x * y + 100);
