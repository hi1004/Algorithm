const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[k], [a, b]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
let ans = 'NG';
for (let i = a; i <= b; i++) {
  if (i % k === 0) {
    ans = 'OK';
    break;
  }
}
console.log(ans);
