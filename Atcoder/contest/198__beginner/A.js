const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
let count = 0;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i + j === n) {
      count++;
    }
  }
}
console.log(count);
