const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m, t], ...a] = require('fs')
    .readFileSync(file, 'utf8')
    .trim()
    .split('\n')
    .map(r =>
      r
        .trim()
        .split(/\s+/)
        .map(i => (isNaN(i) ? i : i - 0))
    ),
  d = 0,
  l = 0,
  max = n;

a.forEach(x => {
  n -= x[0] - l;
  if (n <= 0) d++;
  n += x[1] - x[0];
  n = Math.min(n, max);
  l = x[1];
});
n -= t - l;
if (n <= 0) d++;
console.log(d ? 'No' : 'Yes');
