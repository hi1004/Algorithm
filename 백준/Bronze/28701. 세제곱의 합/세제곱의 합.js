const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);
console.log(sum ** 2);
console.log(sum ** 2);
