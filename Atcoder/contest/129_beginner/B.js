const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], input] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

let s = [];
let sum1 = 0;
let sum2 = 0;
let ans = Infinity;
for (let i = 1; i <= n; i++) {
  s.push(input[i - 1]);
  if (input.slice(i).length > 0) {
    sum2 = input.slice(i).reduce((a, b) => a + b);
  }
  sum1 = s.reduce((a, b) => a + b);

  if (ans > Math.abs(sum1 - sum2)) ans = Math.abs(sum1 - sum2);
}
console.log(ans);
