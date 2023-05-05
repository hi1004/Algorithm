const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m, c], [...b], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
a = a.map(v => v.map((n, i) => n * b[i]).reduce((a, b) => a + b) + c);
console.log(a.filter(v => v > 0).length);
