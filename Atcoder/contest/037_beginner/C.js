let [n, k, ...a] = require('fs')
    .readFileSync('/dev/stdin', 'utf8')
    .trim()
    .split(/\s+/)
    .map(BigInt),
  p = 0n,
  ans;

k = Number(k);
n = Number(n);
for (let i = 0; i < k; i++) p += a[i];
ans = p;
for (let i = 0; i < n - k; i++) {
  p += a[i + k] - a[i];
  ans += p;
}
console.log(String(ans));
