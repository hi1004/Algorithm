const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b, c]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

let i = 0;
let isTrue = false;
for (i = c; i <= b; i += c) {
  if (a <= i && b >= i) {
    isTrue = true;
    break;
  }
}
console.log(isTrue ? i : -1);
