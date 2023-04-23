const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m, x, y], [...numsX], [...numsY]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
let isValid = false;
for (let i = x + 1; i <= y; i++) {
  if (Math.max(...numsX) < i && i <= Math.min(...numsY)) {
    isValid = true;
  }
}
console.log(isValid ? 'No War' : 'War');
