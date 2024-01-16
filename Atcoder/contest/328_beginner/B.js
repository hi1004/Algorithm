const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], s] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
let count = 0;
for (let i = 1; i <= n; i++) {
  if (new Set(i.toString().split('')).size !== 1) continue;
  for (let j = 1; j <= s[i - 1]; j++) {
    if (
      new Set(j.toString().split('')).size === 1 &&
      i.toString().split('')[0] === j.toString().split('')[0]
    ) {
      count++;
    }
  }
}
console.log(count);
