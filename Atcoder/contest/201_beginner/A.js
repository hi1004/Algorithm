const { inflate } = require('zlib');

const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

a.sort((a, b) => a - b);

console.log(a[2] - a[1] === a[1] - a[0] ? 'Yes' : 'No');
