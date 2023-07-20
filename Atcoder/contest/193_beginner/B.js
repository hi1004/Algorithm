const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const result = a
  .map(arr => {
    const [A, P, X] = arr;
    if (X - A > 0) return P;
    return -1;
  })
  .filter(v => v !== -1);
console.log(result.length === 0 ? -1 : Math.min(...result));
