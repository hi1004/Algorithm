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

const sum = a + b;
let ans = null;

if (sum >= 15 && b >= 8) ans = 1;
else if (sum >= 10 && b >= 3) ans = 2;
else if (sum >= 3) ans = 3;
else ans = 4;

console.log(ans);
