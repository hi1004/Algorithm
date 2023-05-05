const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[H, W], [h, w]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
console.log(Math.abs(H - h) * Math.abs(W - w));
