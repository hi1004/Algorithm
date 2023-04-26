const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [t, a], h] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
let ans = [];
h.forEach(v => {
  ans.push(t - v * 0.006);
});
const minValue = Math.min(...ans.map(v => Math.abs(v - a)));
console.log(ans.map(v => Math.abs(v - a)).indexOf(minValue) + 1);
