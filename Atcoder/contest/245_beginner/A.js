const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b, c, d]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

console.log(a * 60 + b > c * 60 + d + 1 / 60 ? 'Aoki' : 'Takahashi');
