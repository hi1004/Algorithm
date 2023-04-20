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
    ),
  q = 0;
for (c = 1; c <= n; c += 2) {
  t = 0;
  for (d = 1; d <= c; d++) {
    if (c % d == 0) t++;
  }
  if (t == 8) q++;
}
console.log(q);
