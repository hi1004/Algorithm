const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [...input] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const v = input.shift()[0];
const sum = input.reduce((a, b) => Number(a) + Number(b), 0);

console.log(v === 2 ? sum : 'Hello World');
