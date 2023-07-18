const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[V, T, S, D]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

if (V * T <= D && D <= S * V) {
  console.log('No');
} else {
  console.log('Yes');
}
