const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r => r.trim().split(/\s+/))
  .map(i => (isNaN(i) ? i : i - 0));

let ans = 0;
if (a >= 13) {
  ans = b;
} else if (a >= 6 && a <= 12) {
  ans = b / 2;
}

console.log(ans);
