const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, l], a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

console.log(a.filter(v => v >= l).length);
