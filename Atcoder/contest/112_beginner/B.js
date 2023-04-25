const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N, T], ...arrs] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const ans = [];
arrs.forEach(arr => {
  const [cost, t] = arr;

  if (t <= T) {
    ans.push(cost);
  }
});
console.log(ans.length === 0 ? 'TLE' : Math.min(...ans));
