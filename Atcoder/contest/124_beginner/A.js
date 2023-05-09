const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b]] = require('fs')
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
for (let i = 0; i < 2; i++) {
  if (a < b) {
    ans += b;
    b--;
  } else {
    ans += a;
    a--;
  }
}
console.log(ans);
