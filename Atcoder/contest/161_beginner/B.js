const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m], [...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const sum = a.reduce((x, y) => x + y);
console.log(a.filter(n => n >= sum * (1 / (4 * m))).length >= m ? 'Yes' : 'No');
