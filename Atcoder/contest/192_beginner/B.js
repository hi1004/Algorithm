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

const even = s.split('').filter((v, i) => i % 2 === 0 && !/[a-z]/g.test(v));
const odd = s.split('').filter((v, i) => i % 2 !== 0 && !/[A-Z]/g.test(v));

console.log(even.length === 0 && odd.length === 0 ? 'Yes' : 'No');
