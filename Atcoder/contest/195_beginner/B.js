const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[A, B, W]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const min = Math.ceil((W * 1000) / B);
const max = Math.floor((W * 1000) / A);
const ans = max >= min ? `${min} ${max}` : 'UNSATISFIABLE';
console.log(ans);
