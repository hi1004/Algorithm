const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
let ans = -1;
for (let i = 0; i < n; i++) {
  if (s.substring(i, i + 3) === 'ABC') {
    ans = i + 1;
    break;
  }
}
console.log(ans);
