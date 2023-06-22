const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b, c, k]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

if (k < a) console.log(k);
else if (k < a + b) console.log(a);
else console.log(a - k + a + b);
