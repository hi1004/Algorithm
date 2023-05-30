const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [...arr]] = require('fs')
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
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    sum += arr[i] * arr[j];
  }
}
console.log(sum);
