const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [s], [k]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

let ans = '';
[...s].forEach(v => {
  if (v !== s[k - 1]) {
    ans += '*';
  } else {
    ans += v;
  }
});
console.log(ans);
