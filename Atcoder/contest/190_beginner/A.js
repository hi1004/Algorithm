const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b, c]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const arr = [a, b];
let ans = '';
if (c === 0) {
  if (a > b) {
    ans = 'Takahashi';
  } else {
    ans = 'Aoki';
  }
} else {
  if (b > a) {
    ans = 'Aoki';
  } else {
    ans = 'Takahashi';
  }
}
console.log(ans);
