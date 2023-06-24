const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

const value = n % 10;

if ([2, 4, 5, 7, 9].includes(value)) {
  console.log('hon');
} else if ([0, 1, 6, 8].includes(value)) {
  console.log('pon');
} else {
  console.log('bon');
}
