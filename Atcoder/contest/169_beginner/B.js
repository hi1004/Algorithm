const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [...a]] = require('fs')
    .readFileSync(file, 'utf8')
    .trim()
    .split('\n')
    .map(r =>
      r
        .trim()
        .split(/\s+/)
        .map(i => (isNaN(i) ? i : BigInt(i)))
    ),
  m = 1n;
if (a.indexOf(0n) == -1) {
  for (c of a) {
    m *= c;
    if (BigInt(10 ** 18) < m) {
      m = -1;
      break;
    }
  }
  console.log(String(m));
} else console.log(0);
