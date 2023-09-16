const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[x, y]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
console.log(`${x / Math.sqrt(x * x + y * y)} ${y / Math.sqrt(x * x + y * y)}`);
