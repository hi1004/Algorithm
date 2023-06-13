const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N, A, B]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : BigInt(i)))
  );

const ans = (N / (A + B)) * A + (N % (A + B) < A ? N % (A + B) : A);
console.log(ans.toString());
