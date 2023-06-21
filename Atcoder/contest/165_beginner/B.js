const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[x]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : BigInt(i)))
  );
let r = 100n;
let ans = 0;
while (r < x) {
  ans++;
  r += r / 100n;
}
console.log(ans);
