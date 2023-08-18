const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[x]] = require('fs')
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
if (0 <= x && x < 40) {
  ans = 40 - x;
} else if (40 <= x && x < 70) {
  ans = 70 - x;
} else if (70 <= x && x < 90) {
  ans = 90 - x;
} else {
  ans = 'expert';
}
console.log(ans);
