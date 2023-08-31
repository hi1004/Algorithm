const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[m, d], [p, n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
const discountedPrice =
  (n % m) * p + (Math.floor(n / m) * m * p * (100 - d)) / 100;

const result = Math.floor(discountedPrice);

console.log(result);
