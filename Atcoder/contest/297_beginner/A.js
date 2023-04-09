let [[a, b], c] = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
let ans = -1;
for (let i = 0; i < a; i++) {
  if (c[i + 1] - c[i] <= b) {
    ans = c[i + 1];
    break;
  }
}
console.log(ans);
