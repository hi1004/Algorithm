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
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    if (i * j === n) {
      ans = 'Yes';
      break;
    }
  }
}
console.log(ans);
