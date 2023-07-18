const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, x], [...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

console.log(a.filter(v => v !== x).join(' '));
