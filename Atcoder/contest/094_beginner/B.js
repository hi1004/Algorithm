const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m, x], a] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(t =>
    t
      .trim()
      .split(/\s+/)
      .map(v => (isNaN(v) ? v : +v))
  );
let upCount = 0;
let downCount = 0;
for (let i = x; i <= n; i++) {
  if (a.includes(i)) upCount++;
}
for (let i = x; i >= 0; i--) {
  if (a.includes(i)) downCount++;
}
console.log(Math.min(upCount, downCount));
