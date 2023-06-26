const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[x, y]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
for (let i = 0; i <= x; i++) {
  if (y === 2 * i + 4 * (x - i)) {
    console.log('Yes');
    return;
  }
}
console.log('No');
