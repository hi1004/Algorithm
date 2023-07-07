const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...a] = require('fs')
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
a.forEach(arr => {
  const [a, b] = arr;
  sum += ((b - a + 1) * (a + b)) / 2;
});
console.log(sum);
