const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m]] = require('fs')
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
if (n < m) {
  ans = String(n).repeat(m);
} else {
  ans = String(m).repeat(n);
}
console.log(ans);
