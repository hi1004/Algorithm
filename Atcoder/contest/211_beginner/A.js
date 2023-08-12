const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a, b]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
if (a > 0 && b > 0) {
  console.log('Alloy');
} else if (0 < a && b === 0) {
  console.log('Gold');
} else {
  console.log('Silver');
}
