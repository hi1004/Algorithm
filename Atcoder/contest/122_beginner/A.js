const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[b]] = require('fs')
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
if (b === 'A') {
  ans = 'T';
} else if (b === 'T') {
  ans = 'A';
} else if (b === 'C') {
  ans = 'G';
} else {
  ans = 'C';
}
console.log(ans);
