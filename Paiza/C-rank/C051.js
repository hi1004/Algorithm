const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
a = a.sort((a, b) => b - a).map(v => String(v));
console.log(Number(a[0] + a[2]) + Number(a[1] + a[3]));
