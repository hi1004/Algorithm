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
  let hazure = 0;
  for (let j = i; j < m + i; j++) {
    if (a[j] === 0) {
      hazure++;
    }
  }

  if (hazure === m) {
    ans = 'NG';
    break;
  }
}
console.log(ans);
