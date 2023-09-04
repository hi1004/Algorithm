const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m], [...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
let ans = 'OK';

for (let i = 0; i < n - m + 1; i++) {
  const subarray = a.slice(i, i + m);
  const zeros = subarray.reduce(
    (count, value) => count + (value === 0 ? 1 : 0),
    0
  );

  if (zeros === m) {
    ans = 'NG';
    break;
  }
}

console.log(ans);
