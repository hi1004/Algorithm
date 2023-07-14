const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...a] = require('fs')
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
  for (let j = i + 1; j < n; j++) {
    if (Math.abs((a[i][1] - a[j][1]) / (a[i][0] - a[j][0])) <= 1) ans++;
  }
}
console.log(ans);
