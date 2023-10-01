const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let arr = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i))
  )
  .flat();

for (let i = 0; i < 3; i++) {
  let n = arr.shift();
  const res = arr
    .splice(0, n)
    .map(v => BigInt(v))
    .reduce((a, b) => a + b)
    .toString();
  console.log(res < 0 ? '-' : res > 0 ? '+' : 0);
}
