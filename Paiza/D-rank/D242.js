let [[a], [b]] = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
console.log(a + b);
