const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
let ans = null;
for (let x = 1; x <= 9; x++) {
  for (let y = 0; y <= 9; y++) {
    if ((10 * x + y) * y === a * 100 + 10 * x + b) {
      ans = [x, y];
      break;
    }
  }
}
console.log(ans ? ans.join(' ') : 'No');
