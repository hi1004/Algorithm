const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[str]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const acgtRegex = /[ACGT]+/g;

console.log(
  str.match(acgtRegex) === null
    ? 0
    : Math.max(...str.match(acgtRegex).map(s => s.length))
);
