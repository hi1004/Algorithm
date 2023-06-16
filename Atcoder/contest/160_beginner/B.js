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

let sum = 0;
while (true) {
  if (n < 5) break;
  sum += Math.floor(n / 500) * 1000;
  n = n % 500;
  sum += Math.floor(n / 5) * 5;
  n = n % 5;
}
console.log(sum);
