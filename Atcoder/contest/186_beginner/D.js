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

let ans = 0n;
a.sort((a, b) => b - a);
for (let i = 0; i < n; i++) {
  ans += BigInt(a[i] * (n - i * 2 - 1));
}
console.log(ans.toString());
