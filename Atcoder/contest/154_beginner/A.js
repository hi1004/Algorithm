const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s, t], [a, b], [u]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const colors = {
  [s]: a,
  [t]: b,
};
colors[u]--;
console.log(Object.values(colors).join(' '));
