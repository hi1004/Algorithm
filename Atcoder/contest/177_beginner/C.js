const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, [...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : BigInt(i)))
  );
let mod = 1000000007n;
let ans = 0n;
let x = 0n;
for (let i = 0n; i < n; i++) {
  ans += a[i] * x;
  x += a[i];
}
console.log((ans % mod).toString());
