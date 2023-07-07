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
const m = a.map(v => Math.abs(v)).reduce((v1, v2) => v1 + v2);
const u = Math.sqrt(a.map(v => Math.abs(v) ** 2).reduce((v1, v2) => v1 + v2));
const c = Math.max(...a.map(v => Math.abs(v)));
console.log(m);
console.log(u);
console.log(c);
