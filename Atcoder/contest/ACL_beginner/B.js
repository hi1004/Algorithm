const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[A, B, C, D]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
console.log(Math.max(A, C) <= Math.min(B, D) ? 'Yes' : 'No');
