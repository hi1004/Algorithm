const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : BigInt(i)))
  );

const euclideanAlgorithm = (a, b) =>
  b === 0 ? a : euclideanAlgorithm(b, a % b);

function findGCD_EuclideanAlgorithm(a, b, c) {
  let gcd = euclideanAlgorithm(a, b);
  gcd = euclideanAlgorithm(gcd, c);

  return gcd;
}
let ans = 0;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    for (let k = 1; k <= n; k++) {
      ans += findGCD_EuclideanAlgorithm(i, j, k);
    }
  }
}
console.log(ans);
