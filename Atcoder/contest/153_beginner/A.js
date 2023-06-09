const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m]] = require('fs')
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
while (true) {
  n = n - m;
  count++;

  if (n <= 0) break;
}
console.log(count);
