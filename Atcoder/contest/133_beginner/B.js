const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, d], ...x] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

let ans = 0;
for (let i = 0; i < n; i++) {
  let cal = 0;
  for (let j = i + 1; j < n; j++) {
    let sum = 0;
    for (let k = 0; k < d; k++) {
      cal = Math.pow(Math.abs(x[i][k] - x[j][k]), 2);
      sum += cal;
    }
    if (Number.isInteger(Math.sqrt(sum))) ans++;
  }
}
console.log(ans);
