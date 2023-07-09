const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[x1, y1, x2, y2]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

console.log((x1 * y2 + x2 * y1) / (y1 + y2));
