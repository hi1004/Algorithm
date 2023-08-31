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
const totalNormalPrice = (n % m) * p;
const discountPrice = (p * (100 - d)) / 100;

const discountedPrice =
  totalNormalPrice + Math.floor(n / m) * m * discountPrice;

console.log(Math.floor(discountedPrice));
