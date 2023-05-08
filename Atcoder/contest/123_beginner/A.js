const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [...str] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const k = str.pop();

console.log(Math.max(...str) - Math.min(...str) > k ? ':(' : 'Yay!');
