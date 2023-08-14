const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s, t]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

let ans = 0;
for (let i = 0; i <= s; i++) {
  for (let j = 0; j <= s; j++) {
    for (let k = 0; k <= s; k++) {
      if (i + j + k <= s && i * j * k <= t) {
        ans++;
      }
    }
  }
}
console.log(ans);
