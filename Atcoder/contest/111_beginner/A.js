const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
console.log(
  String(n)
    .split('')
    .map(s => {
      if (s === '1') return '9';
      if (s === '9') return '1';
    })
    .join('')
);
