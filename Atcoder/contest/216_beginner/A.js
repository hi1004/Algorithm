const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i))
  );

const y = n.split('.')[1];
let ans = Math.floor(n);
if (0 <= y && y <= 2) {
  ans += '-';
} else if (3 <= y && y <= 6) {
  ans = Math.floor(n);
} else {
  ans += '+';
}
console.log(ans);
