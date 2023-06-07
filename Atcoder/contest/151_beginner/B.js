const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, k, m], [...nums]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
let i;
for (i = 0; i <= k; i++) {
  const sum = nums.reduce((a, b) => a + b, i);

  if (sum / n >= m) {
    console.log(i);
    break;
  }
}

if (i > k) console.log(-1);
