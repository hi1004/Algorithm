const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, x], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
let ans = -1;
let sum = 0;
for (let i = 1; i <= n; i++) {
  const [v, p] = a[i - 1];
  sum += v * p;
  if (sum > x * 100) {
    ans = i;
    break;
  }
}
console.log(ans);
