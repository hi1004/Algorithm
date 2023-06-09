const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[h, n], [...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const result = a.reduce((a, b) => a + b);
console.log(result >= h ? 'Yes' : 'No');
