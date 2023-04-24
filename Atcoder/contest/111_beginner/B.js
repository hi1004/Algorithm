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

const nums = Array.from({ length: 9 }, (_, i) => (i + 1) * 111);

for (let val of nums) {
  if (n <= val) {
    console.log(val);
    break;
  }
}
