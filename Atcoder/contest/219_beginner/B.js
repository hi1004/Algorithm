const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [...A] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i))
  );
A = A.flat();
const T = A.pop();
const ans = T.split('').reduce((a, c) => a + A[parseInt(c) - 1], '');
console.log(ans);
