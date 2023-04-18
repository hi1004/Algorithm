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

let ans = 'No';

while (n >= 0) {
  if (n % 7 === 0) {
    ans = 'Yes';
    break;
  }
  n -= 4;
}

console.log(ans);
