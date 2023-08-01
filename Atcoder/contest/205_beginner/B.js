const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const arr = Array.from({ length: n }, (_, i) => i + 1);
const answer = arr.map((v, i) => a.includes(v));
console.log(new Set(answer).size === 1 ? 'Yes' : 'No');
