const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m], ...arrs] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
arrs = arrs.map((x, i) => [x[0], x[1], i]).sort((a, b) => a[1] - b[1]);
const g = {};
arrs.forEach(x => {
  const q = (g[x[0]] = (g[x[0]] || 0) + 1);
  x.push(String(x[0]).padStart(6, '0') + String(q).padStart(6, '0'));
});

console.log(
  arrs
    .sort((a, b) => a[2] - b[2])
    .map(x => x[3])
    .join('\n')
);
