const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, k]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const arr = Array.from({ length: n }, (_, i) =>
  Array.from({ length: k }, (_, j) => [i + 1 + '0' + (j + 1)])
);
console.log(arr.flat().reduce((a, b) => Number(a) + Number(b), 0));
