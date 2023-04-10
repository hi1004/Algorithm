let [[a, b, c, d]] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
let ans = 'No';
if (Math.abs(c - a) <= d || (Math.abs(b - a) <= d && Math.abs(c - b) <= d))
  ans = 'Yes';
console.log(ans);
