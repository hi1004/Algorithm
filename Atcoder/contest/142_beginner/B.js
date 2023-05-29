const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, k], [...h]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

console.log(h.filter(v => v >= k).length);
