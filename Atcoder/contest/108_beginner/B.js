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
const dx = x2 - x1;
const dy = y2 - y1;

console.log(`${x2 - dy} ${y2 + dx} ${x1 - dy} ${y1 + dx}`);
