const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[b]] = require('fs')
    .readFileSync(file, 'utf8')
    .trim()
    .split('\n')
    .map(r =>
      r
        .trim()
        .split(/\s+/)
        .map(i => (isNaN(i) ? i : BigInt(i)))
    ),
  a = 1n;

while (a ** a < b) {
  a++;
}
console.log(a ** a === b ? Number(a) : -1);
