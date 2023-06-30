const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, d], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const result = a
  .map(arr => Math.sqrt(arr[0] ** 2 + arr[1] ** 2))
  .filter(v => v <= d).length;
console.log(result);
