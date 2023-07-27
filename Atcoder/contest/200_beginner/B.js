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
for (let i = 0; i < k; i++) {
  if (n % 200 === 0) {
    n = n / 200;
  } else {
    n = n + '200';
  }
  n = Number(n);
}
console.log(n);
