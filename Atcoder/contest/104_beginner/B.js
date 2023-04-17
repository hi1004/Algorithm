const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const regex = /^A[a-z]+C[a-z]+$/;

console.log(regex.test(s) ? 'AC' : 'WA');
