const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, k]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
function calc(x) {
  const xArr = String(x).split('').map(Number);
  const g1 = xArr.sort((a, b) => b - a).join('');
  const g2 = xArr.sort((a, b) => a - b).join('');
  return g1 - g2;
}

for (let i = 0; i < k; i++) {
  n = calc(n);
}

console.log(n);
