const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
let maxValue = 0;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const [x1, y1] = a[i];
    const [x2, y2] = a[j];
    maxValue = Math.max(maxValue, Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
  }
}
console.log(maxValue);
