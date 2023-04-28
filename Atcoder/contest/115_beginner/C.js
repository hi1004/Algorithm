const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, k], ...p] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
p = p.flat();
p.sort((a, b) => a - b);
let ans = Infinity;
for (let i = 0; i <= n - k; i++) {
  let q = p[i + k - 1] - p[i];
  if (q < ans) ans = q;
}
console.log(ans);
