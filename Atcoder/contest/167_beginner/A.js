const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s], [t]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
t = t.substring(0, t.length - 1);

console.log(s === t ? 'Yes' : 'No');
