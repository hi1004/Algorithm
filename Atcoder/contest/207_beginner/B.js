const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[A, B, C, D]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

let ans = -1;

for (let x = 1; x <= 10 ** 5; x++) {
  if (A + B * x <= D * C * x) {
    ans = x;
    break;
  }
}
console.log(ans);
