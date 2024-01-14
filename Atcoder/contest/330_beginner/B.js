const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, l, r], a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

console.log(a.map(e => (e < l ? l : Math.min(e, r))).join(' '));
