let [[a, b]] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

console.log(Math.max(a + b, a - b, a * b) + 0);
