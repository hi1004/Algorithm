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
console.log(
  a
    .map(v => (v <= 10 ? 0 : Math.floor(v / 10) * 10 - 10 + (v % 10)))
    .reduce((x, y) => x + y, 0)
);
