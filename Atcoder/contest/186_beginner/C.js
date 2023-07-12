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
  if (i.toString(10).includes('7') || i.toString(8).includes('7')) {
    count++;
  }
}
console.log(n - count);
