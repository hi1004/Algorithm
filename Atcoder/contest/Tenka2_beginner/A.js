const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b, c]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

console.log(Math.min(a, b) < c && c < Math.max(a, b) ? 'Yes' : 'No');
