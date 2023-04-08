const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[...a], n] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(i =>
    i
      .trim()
      .split(/\s+/)
      .map(v => (isNaN(v) ? v : +v))
  );
a = a.sort((a, b) => b - a);
a[0] = a[0] * 2 ** n;
let ans = a.reduce((a, b) => a + b, 0);
console.log(ans);
