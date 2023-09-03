const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[m, d]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i))
  );

console.log(new Set(m + d).size === 1 ? 'Yes' : 'No');
