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

if (n >= 1 && n <= 125) {
  console.log(4);
} else if (n >= 126 && n <= 211) {
  console.log(6);
} else {
  console.log(8);
}
