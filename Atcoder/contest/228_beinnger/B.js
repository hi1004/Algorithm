const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, k], [...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

const set = new Set();
set.add(k);
for (const _ of a) {
  set.add(a[k - 1]);
  k = a[k - 1];
}
console.log(set.size);
