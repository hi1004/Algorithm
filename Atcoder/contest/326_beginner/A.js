const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[x, y]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

console.log((x < y && x - y >= -2) || (x > y && x - y <= 3) ? 'Yes' : 'No');
