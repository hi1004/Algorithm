const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [...a], [...b], [...c]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
let next = 1;
let cur;
let sum = 0;
for (cur = 0; cur < n; cur++) {
  sum += b[a[cur] - 1];
  if (a[next] - a[cur] === 1) sum += c[a[cur] - 1];
  next++;
}

console.log(sum);
