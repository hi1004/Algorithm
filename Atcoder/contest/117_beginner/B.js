const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [...l]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
l.sort((a, b) => b - a);
const max = l.shift();
const sum = l.reduce((a, b) => a + b);
console.log(max < sum ? 'Yes' : 'No');
