const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [...a], [...b]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

let ans = 0;
for (let i = 0; i < n; i++) {
  ans += a[i] * b[i];
}
console.log(ans === 0 ? 'Yes' : 'No');
