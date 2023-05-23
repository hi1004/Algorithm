const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N], [...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
function getGcd(a, b) {
  if (b === 0) return a;
  return getGcd(b, a % b);
}

function solution(arr) {
  return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}
console.log(
  solution(a) / a.map((x, i) => solution(a) / a[i]).reduce((a, b) => a + b)
);
