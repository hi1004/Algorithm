const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[M, D], [y, m, d]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

if (D === d) {
  d = 1;
  if (M === m) {
    y++;
    m = 1;
  } else {
    m++;
  }
} else {
  d++;
}

console.log(y, m, d);
