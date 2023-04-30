const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b, k]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

for (let i = 0; i < k; i++) {
  if (i % 2 === 0) {
    if (a % 2 !== 0) {
      a--;
      b += a /= 2;
    } else {
      b += a /= 2;
    }
  } else {
    if (b % 2 !== 0) {
      b--;
      a += b /= 2;
    } else {
      a += b /= 2;
    }
  }
}

console.log(a, b);
