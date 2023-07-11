const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b], [s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

let sum = b;
for (let i = 0; i < a; i++) {
  if (s[i] === 'o') {
    sum++;
  } else {
    sum--;
    if (sum < 0) {
      sum = 0;
    }
  }
}
console.log(sum);
