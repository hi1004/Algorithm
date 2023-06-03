const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [s, t]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
let ans = '';
for (let i = 0; i < n; i++) {
  ans += s.split('')[i] + t.split('')[i];
}
console.log(ans);
