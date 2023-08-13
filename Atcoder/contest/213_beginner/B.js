const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const sorted = [...a].sort((a, b) => a - b);
console.log(a.indexOf(sorted[n - 2]) + 1);
